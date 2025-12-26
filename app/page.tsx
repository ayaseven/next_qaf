import { Container, Title } from '@/components/shared'
import { Filters } from '@/components/shared/filter'
import { TopBar } from '@/components/shared/main'
import { ProductGroupList } from '@/components/shared/product'

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
				<div className='flex gap-20'>
					{/*Фильтрация*/}
					<div className='w-62.5'>
						<Filters />
					</div>
					{/*Список товаров*/}
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductGroupList
								categoryId={1}
								title={'Сезонное меню'}
								items={[
									{
										id: 1,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 2,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 3,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 4,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 5,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 6,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 7,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 8,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 9,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 10,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
								]}
								className={''}
							/>
							<ProductGroupList
								categoryId={2}
								title={'Завтраки'}
								items={[
									{
										id: 1,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 2,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 3,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 4,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 5,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 6,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 7,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 8,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 9,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 10,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
								]}
								className={''}
							/>
							<ProductGroupList
								categoryId={3}
								title={'Закуски и салаты'}
								items={[
									{
										id: 1,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 2,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 3,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 4,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 5,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 6,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 7,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 8,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 9,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 10,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
								]}
								className={''}
							/>

							<ProductGroupList
								categoryId={4}
								title={'Горячее'}
								items={[
									{
										id: 1,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 2,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 3,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 4,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 5,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 6,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 7,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 8,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 9,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 10,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
								]}
								className={''}
							/>

							<ProductGroupList
								categoryId={5}
								title={'Напитки'}
								items={[
									{
										id: 1,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 2,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 3,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 4,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 5,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 6,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 7,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 8,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 9,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 10,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
								]}
								className={''}
							/>
							<ProductGroupList
								categoryId={6}
								title={'Десерты'}
								items={[
									{
										id: 1,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 2,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 3,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 4,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 5,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 6,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 7,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 8,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 9,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 10,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
								]}
								className={''}
							/>
							<ProductGroupList
								categoryId={7}
								title={'Супы'}
								items={[
									{
										id: 1,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 2,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 3,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 4,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 5,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 6,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 7,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 8,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 9,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
									{
										id: 10,
										name: 'Жаркое по-домашнему',
										imageUrl:
											'https://optim.tildacdn.com/tild6362-3233-4234-b934-373733396133/-/format/webp/image-01-09-25-23-53.jpeg.webp',
										price: 850,
										items: [{ price: 850 }],
									},
								]}
								className={''}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
