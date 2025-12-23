import { Button } from '@/components/ui'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Title } from '../title'

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
		'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок'
	return (
		<div className={className}>
			<Link href={`./product/${id}`}>
				<div className='flex justify-center p-6 bg-gray-100 rounded-lg h-65'>
					<img className='w-62.5 object-cover rounded-md' src={imageUrl} alt={name} />
				</div>
				<Title text={name} size='sm' className='mb-1 mt-3 font-bold' />
				<p className='text-sm text-gray-400'>{ingredients}</p>
				<div className='flex justify-between items-center mt-4'>
					<span className='text-[20px]'>
						от <b className=''>{price}</b>
					</span>
					<Button variant='secondary'>
						<Plus size={20} className='mr-1' />
						Добавить
					</Button>
				</div>
			</Link>
		</div>
	)
}
