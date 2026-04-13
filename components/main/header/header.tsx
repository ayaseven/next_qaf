import { cn } from '@/lib/utils'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Container } from '../shared/container'
import { Button } from '../../ui'
import { HamburgerMenu } from './hamburger-menu/hamburger-menu'
import { SearchInput } from './search-input/search-input'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header
			className={cn(
				'fixed sm:static top-0 left-0 right-0 z-30 border-b border-gray-100 bg-white',
				className,
			)}
		>
			<Container className='flex items-center justify-between py-8 px-2'>
				{/*Левая часть*/}
				<Link href='/'>
					<div className='flex items-center gap-4'>
						<div className='relative w-10 h-10 sm:w-12.5 sm:h-12.5'>
							<Image
								className='object-contain'
								src='/logo1.png'
								fill
								sizes='fill'
								alt='Logo'
							/>
						</div>
						<div>
							<h1 className=' text-sm sm:text-2xl uppercase font-black'>
								QAF GROZNY
							</h1>
							<p className='text-xs text-gray-400 leading-3'>
								вкусней уже некуда
							</p>
						</div>
					</div>
				</Link>
				{/*Поиск по центру*/}
				<SearchInput />
				{/*Левая часть*/}
				<div className='hidden sm:flex sm:items-center sm:gap-3 '>
					<Button variant='outline' className='flex items-center gap-1'>
						<User size={16} />
						Войти
					</Button>
					<div>
						<Button className='group relative'>
							<b>520р</b>
							<span className='h-full w-px bg-white/30 mx-3' />
							<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
								<ShoppingCart size={16} className='relative' strokeWidth={2} />
								<b>3</b>
							</div>
							<ArrowRight
								size={20}
								className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
							/>
						</Button>
					</div>
				</div>
				<HamburgerMenu />
			</Container>
		</header>
	)
}
