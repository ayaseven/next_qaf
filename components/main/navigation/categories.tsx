'use client'

import { Category } from '@/lib/generated/prisma'
import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import React from 'react'

interface Props {
	items: Category[]
	className?: string
}

export const Categories: React.FC<Props> = ({items, className }) => {
	const categoryActiveId = useCategoryStore(state => state.activeId)

	return (
		<div
			className={cn(
				'hidden sm:inline-flex sm:gap-1 sm:bg-gray-100 sm:p-1 sm:rounded-2xl sm:select-none ',
				className,
			)}
		>
			{items.map(({ name, id }, i) => (
				<a
					className={cn(
						'flex items-center font-bold h-11 rounded-2xl px-4',
						categoryActiveId === id &&
							'bg-white shadow-md shadow-gray-100 text-primary',
					)}
					href={`/#${name}`}
					key={i}
				>
					{name}
				</a>
			))}
		</div>
	)
}
