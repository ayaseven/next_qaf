import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className: string
	imageUrl: string
}

export const ProductImage: React.FC<Props> = ({ className, imageUrl }) => {
	return (
		<div className={cn('', className)}>
			<img src={imageUrl} alt='product' className='w-100 h-100 rounded-2xl' />
		</div>
	)
}
