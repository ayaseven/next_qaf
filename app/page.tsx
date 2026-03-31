import { Container, Title } from '@/components/shared'
import { ProductGroupList, TopRowOfCategories } from '@/components/shared/main'
import { prisma } from '@/prisma/prisma-client'

export default async function Home() {
	const categories = await prisma.category.findMany({
		include: {
			products: {
				include: {
					ingredient: true,
					items: true,
				},
			},
		},
	})
	return (
		<>
			{/*Зона верхних категорий*/}
			<Container className='mt-10 px-2'>
				<Title
					text={'Все меню'}
					size='lg'
					className='text-center w-full font-extrabold sm:text-left'
				/>
			</Container>
			<TopRowOfCategories
				categories={categories.filter(category => category.products.length > 0)}
			/>
			{/*Зона категории товары и так далее*/}
			<Container className='mt-10 pb-14'>
				<div className='flex gap-20'>
					{/*Фильтрация*/}
					{/* <div className='hidden sm:w-62.5 sm:block'>
						<Filters />
					</div> */}
					{/*Список товаров*/}
					<div className='flex-1'>
						<div className='flex flex-col gap-16 px-2'>
							{categories.map(category => (
								<ProductGroupList
									key={category.id}
									categoryId={category.id}
									title={category.name}
									items={category.products}
									className={'text-center w-full  sm:text-left'}
								/>
							))}
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
