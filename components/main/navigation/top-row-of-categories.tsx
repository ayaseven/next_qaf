import { Category } from '@/lib/generated/prisma'
import { cn } from '@/lib/utils'
import React from 'react'
import { Container } from '../shared/container'
import { Categories } from './categories'
import { SortPopup } from './sort-popup'

interface Props {
	categories: Category[]
	className?: string
}

export const TopRowOfCategories: React.FC<Props> = ({
	categories,
	className,
}) => {
	return (
		<div
			className={cn(
				'sticky top-25  bg-white py-5 shadow-lg shadow-black/5 z-10 flex justify-center sm:top-0 sm:py-6.5 sm:block',
				className,
			)}
		>
			<Container className='flex items-center px-2'>
				<Categories items={categories} />
				<SortPopup />
			</Container>
		</div>
	)
}
