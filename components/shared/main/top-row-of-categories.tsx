import { cn } from '@/lib/utils'
import React from 'react'
import { Categories, Container, SortPopup } from '..'

interface Props {
	className?: string
}

export const TopRowOfCategories: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'sticky top-0 bg-white py-6.5 shadow-lg shadow-black/5 z-10 flex justify-center sm:block',
				className,
			)}
		>
			<Container className='flex items-center px-2'>
				<Categories />
				<SortPopup />
			</Container>
		</div>
	)
}
