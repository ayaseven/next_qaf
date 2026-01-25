import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	const body = await req.json()
	const products = await prisma.product.create({
		data: body,
	})
	return NextResponse.json(products)
}
export async function GET() {
	const products = await prisma.product.findMany()
	return NextResponse.json(products)
}