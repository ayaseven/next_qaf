import { Title } from '@/components/main/shared'
import { Container } from '@/components/main/shared/container'
import { Button } from '@/components/ui'
import { prisma } from '@/prisma/prisma-client'
import { ArrowLeft, ArrowRight, ShoppingBasket } from 'lucide-react'
import { notFound } from 'next/navigation'

export default async function ProductPage({
	params,
}: {
	params: Promise<{ id: string }> // Указываем, что это Promise
}) {
	// Дожидаемся получения id
	const { id } = await params

	const product = await prisma.product.findFirst({
		where: {
			id: Number(id),
		},
	})

	if (!product) {
		return notFound()
	}
	const ingredients: string =
		'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус'
	return (
		<Container className='flex justify-center my-10 px-2 items-center'>
			<Button variant='default' size='lg' className='mr-5'>
				<ArrowLeft />
			</Button>
			<div className='px-2 w-130'>
				<div className='flex justify-center  w-full h-80'>
					<img
						className='w-full h-full object-cover rounded-t-2xl'
						src={product.imageUrl}
						alt={product.name}
					/>
				</div>
				<div className='bg-gray-50 shadow-2xl rounded-b-2xl text-center flex flex-col justify-center items-center'>
					<Title
						text={product.name}
						size='sm'
						className='mb-1 font-bold pt-2'
					/>
					<span className='text-[15px] text-orange-600 pt-2'>
						<b className=''>{product.price} ₽</b>
					</span>
					<p className='text-sm text-gray-400 mx-5'>{ingredients}</p>
					<div className='flex flex-col items-center my-10 w-40 sm:transition-all sm:hover:scale-105 sm:duration-300'>
						<Button size={'cardProductSize'} variant='default'>
							<ShoppingBasket size={20} className='mr-1' />
							Добавить
						</Button>
					</div>
				</div>
			</div>
			<Button variant='default' size='lg' className='ml-5'>
				<ArrowRight />
			</Button>
		</Container>
	)
}
