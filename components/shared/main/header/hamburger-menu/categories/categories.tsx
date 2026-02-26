'use client'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import React, { Dispatch, SetStateAction } from 'react'

interface Props {
	pressing: Boolean
	setPressing: Dispatch<SetStateAction<boolean>>
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
export const Categories: React.FC<Props> = ({
	className,
	pressing,
	setPressing,
}) => {
	const categoryActiveId = useCategoryStore(state => state.activeId)

	return (
		<div className={cn('w-full', className)}>
			{cats.map(({ name, id }, i) => (
				<a
					className={cn(
						'flex items-center font-bold h-11 rounded-2xl px-4',
						categoryActiveId === id &&
							'bg-white shadow-md shadow-gray-200 text-primary',
					)}
					href={`/#${name}`}
					key={i}
					onClick={() => setPressing(prev => !prev)}
				>
					{name}
				</a>
			))}
		</div>
	)
}
