import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	const body = await req.json()
	const categories = await prisma.category.create({
		data: body,
	})
	return NextResponse.json(categories)
}
