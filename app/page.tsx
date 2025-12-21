import { Container, Filters, Title, TopBar } from '@/components/shared'

export default function Home() {
	return (
		<>
    {/*Зона верхних категорий*/}
			<Container className='mt-10'>
				<Title text={'Все меню'} size='lg' className='font-extrabold' />
			</Container>
			<TopBar />
      {/*Зона категории товары и так далее*/}
			<Container className='mt-10 pb-14'>
				<div className='flex gap-15'>
					{/*Фильтрация*/}
					<div className='w-62.5'>
						<Filters />
					</div>
					{/*Список товаров*/}
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>Список товаров</div>
					</div>
				</div>
			</Container>
		</>
	)
}
