// src/lib/prisma.ts
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import { PrismaClient } from '../lib/generated/prisma' // Используйте ваш путь импорта

const connectionString = process.env.DATABASE_URL

// Проверка на случай, если переменная окружения не установлена
if (!connectionString) {
	throw new Error('DATABASE_URL environment variable is not set.')
}

const pool = new pg.Pool({ connectionString })
const adapter = new PrismaPg(pool)

// --- Начало синглтон-паттерна ---
const prismaClientSingleton = () => {
	return new PrismaClient({
		adapter, // <-- КЛЮЧЕВОЕ ИЗМЕНЕНИЕ: передаем адаптер сюда
	})
}

declare global {
	var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

if (process.env.NODE_ENV === 'production') globalThis.prismaGlobal = prisma
// --- Конец синглтон-паттерна ---
