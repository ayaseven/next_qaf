import { cn } from '@/lib/utils'
import { ArrowUpDown } from 'lucide-react'
import React from 'react'

interface Props {
	className?: string
}

export const SortPopup: React.FC<Props> = ({ className }) => {
	return (
		<div className='px-2'>
			<div
				className={cn(
					'inline-flex items-center gap-1 rounded-2xl h-13 bg-gray-100 px-5 sm:cursor-pointer',
					className,
				)}
			>
				<ArrowUpDown size={16} />
				<b>Сортировка</b>
				<b className='text-primary'>популярное</b>
			</div>
		</div>
	)
}
