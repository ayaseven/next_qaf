import { Button } from '@/components/ui'
import { ShoppingBasket } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Title } from '../../title'

interface Props {
	id: number
	name: string
	price: number
	imageUrl: string
	className?: string
}

export const ProductCard: React.FC<Props> = ({
	id,
	name,
	price,
	imageUrl,
	className,
}) => {
	const ingredients: string =
		'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус ...'
	return (
		<>
			<Link
				className='px-2 sm:px-0 sm:transition-all sm:hover:scale-105 sm:duration-300 sm:w-70'
				href={`./product/${id}`}
			>
				<div className='flex justify-center  w-full h-80'>
					<img
						className='w-full h-full object-cover rounded-t-2xl'
						src={imageUrl}
						alt={name}
					/>
				</div>
				<div className='bg-gray-50 shadow-2xl  rounded-b-2xl text-center'>
					<Title text={name} size='xs' className='mb-1 font-bold pt-2' />
					<span className='text-[15px] text-orange-600 pt-2'>
						<b className=''>{price} ₽</b>
					</span>
					<p className='text-sm text-gray-400'>{ingredients}</p>
					<div className='flex flex-col  items-center mt-4 pb-5 px-5 sm:transition-all sm:hover:scale-105 sm:duration-300'>
						<Button size={'cardProductSize'} variant='default'>
							<ShoppingBasket size={20} className='mr-1' />
							Добавить
						</Button>
					</div>
				</div>
			</Link>
		</>
	)
}
