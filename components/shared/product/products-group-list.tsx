import { cn } from '@/lib/utils'
import React from 'react'
import { Title } from '../title'
import { ProductCard } from './product-card'

interface Props {
	title: string
	items: any[]
	listClassName?: string
	categoryId: number
	className: string
}

export const ProductGroupList: React.FC<Props> = ({
	title,
	items,
	listClassName,
	categoryId,
	className,
}) => {
	return (
		<div className={className}>
			<Title text={title} size='lg' className='font-extrabold mb-5' />
			{/*Сетка*/}
			<div className={cn('grid grid-cols-3 gap-12.5')}>
				{items.map((product, i) => (
					<ProductCard
						key={product.is}
						id={product.id}
						name={product.name}
						price={product.items[0].price}
						imageUrl={product.imageUrl}
					/>
				))}
			</div>
		</div>
	)
}
