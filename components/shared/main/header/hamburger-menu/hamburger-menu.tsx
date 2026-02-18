'use client'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'
import { Logs } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Categories } from './categories/categories'
interface Props {
	className?: string
}

export const HamburgerMenu: React.FC<Props> = ({ className }) => {
	const [pressing, setPressing] = useState(false)
	useEffect(() => {
		if (pressing) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		return () => {
			document.body.style.overflow = ''
		}
	}, [pressing])

	return (
		<div className='sm:hidden'>
			{pressing && (
				<div
					onClick={() => setPressing(prev => !prev)}
					className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 backdrop-blur z-20'
				/>
			)}
			<Button
				onClick={() => setPressing(prev => !prev)}
				size={'sm'}
				variant='default'
			>
				<Logs />
			</Button>
			<div
				className={cn(
					'flex py-8 fixed top-0 right-0 z-20 sm:hidden border bg-white transition-all duration-500 ease-in-out',
					pressing
						? 'w-60 h-dvh opacity-100'
						: 'w-0 h-dvh opacity-0 pointer-events-none',
				)}
			>
				<div className='w-full flex flex-col px-3'>
					<div className='w-full h-20 flex items-center justify-center'>
						<div className='relative w-10 h-10 sm:w-12.5 sm:h-12.5'>
							<Image
								className='object-contain'
								src='/logo1.png'
								fill
								sizes='fill'
								alt='Logo'
							/>
						</div>
						<h1 className=' text-sm sm:text-2xl uppercase font-black'>
							QAF GROZNY
						</h1>
					</div>
					<Categories />
				</div>
			</div>
		</div>
	)
}
