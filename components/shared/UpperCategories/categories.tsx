'use client'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import React from 'react'

interface Props {
	className?: string
}
const cats = [
	{ id: 1, name: 'Сезонное меню' },
	{ id: 2, name: 'Завтраки' },
	{ id: 3, name: 'Закуски и салаты' },
	{ id: 4, name: 'Горячее' },
	{ id: 5, name: 'Напитки' },
	{ id: 6, name: 'Десерты' },
	{ id: 7, name: 'Супы' },
]
export const Categories: React.FC<Props> = ({ className }) => {
	const categoryActiveId = useCategoryStore(state => state.activeId)

	return (
		<div
			className={cn(
				'inline-flex gap-1 bg-gray-50 p-1 rounded-2xl select-none ',
				className
			)}
		>
			{cats.map(({ name, id }, i) => (
				<a
					className={cn(
						' flex items-center font-bold h-11 rounded-2xl px-4',
						categoryActiveId === id &&
							'bg-white shadow-md shadow-gray-200 text-primary'
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
