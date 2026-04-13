import { ProductImage } from '@/components/main/shared'
import { Container } from '@/components/main/shared/container'
import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }> // Указываем, что это Promise
}) {
  // Дожидаемся получения id
  const { id } = await params
  
  const product = await prisma.product.findFirst({ 
    where: { 
      id: Number(id) 
    } 
  })

  if (!product) {
    return notFound()
  }

  return <Container className='flex flex-col my-10 px-2'>
		<ProductImage imageUrl={product.imageUrl} className={''}/>
	</Container>
}