'use client'

import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { useClickAway } from 'react-use'

interface Props {
	className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
	const [focused, setFocused] = useState(false)
	const ref = useRef(null)
	useClickAway(ref, () => {
		setFocused(false)
	})
	return (
		<>
			{focused && (
				<div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 backdrop-blur z-30' />
			)}
			<div className='mx-10 flex-1'>
				<div
					ref={ref}
					className={cn(
						'hidden sm:flex sm:rounded-2xl sm:flex-1 sm:justify-between sm:relative sm:h-11 sm:z-30',
						className,
					)}
				>
					<Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400' />
					<input
						className={'rounded-2xl outline-none w-full bg-gray-100 pl-11'}
						type='text'
						placeholder='Найти'
						onFocus={() => setFocused(true)}
					/>
					<div
						className={cn(
							'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
							focused && 'visible opacity-100 top-12',
						)}
					>
						<Link
							className='flex items-center gap-2 px-3 py-2 hover:bg-primary/10'
							href='/search'
						>
							<img
								className='rounded-sm w-8 h-8'
								src='https://optim.tildacdn.com/tild3135-3738-4162-a431-663364323563/-/format/webp/noroot.png.webp'
							/>
							<div
							// onClick={onClickItem}
							></div>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}
