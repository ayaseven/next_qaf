import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import { PrismaClient } from '../lib/generated/prisma' // Используйте ваш путь импорта

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
	throw new Error('DATABASE_URL environment variable is not set.')
}

const pool = new pg.Pool({ connectionString })
const adapter = new PrismaPg(pool)

const prismaClientSingleton = () => {
	return new PrismaClient({
		adapter,
	})
}

declare global {
	var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

if (process.env.NODE_ENV === 'production') globalThis.prismaGlobal = prisma
