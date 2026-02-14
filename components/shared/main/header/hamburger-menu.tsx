'use client'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'
import { Logs } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'

interface Props {
	className?: string
}

export const HamburgerMenu: React.FC<Props> = ({ className }) => {
	const [pressing, setPressing] = useState(false)
	const ref = useRef(null)
	useClickAway(ref, () => {
		setPressing(false)
	})
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
		<>
		
			<div className='z-30 sm:hidden '>
				<Button
					onClick={() => setPressing(prev => !prev)}
					size={'sm'}
					variant='default'
				>
					<Logs
						className={cn(
							`transition-transform duration-500 ${pressing ? 'rotate-90' : 'rotate-0'}`,
						)}
					/>
				</Button>
			</div>
			<div
				className={cn(
					'flex py-8 fixed top-0 right-0 z-20 sm:hidden border bg-white transition-all duration-500 ease-in-out',
					pressing
						? 'w-60 h-dvh opacity-100'
						: 'w-0 h-dvh opacity-0 pointer-events-none',
				)}
			>
				<div className='w-10 h-2'></div>
			</div>
		</>
	)
}
