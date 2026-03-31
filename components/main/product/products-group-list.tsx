'use client'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import React, { useEffect, useRef } from 'react'
import { Title } from '../../title'
import { ProductCard } from './product-card'

interface Props {
  title: string
  items: any[]
  listClassName?: string
  categoryId: number
  className: string
}

export const ProductGroupList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      
      const isMobile = window.matchMedia('(max-width: 640px)').matches
      
      // МЕСТО №1: Логика проверки позиции (твои 200px для мобилки)
      const offset = isMobile ? 200 : 80 

      // Категория активна, если "линия" 200px находится внутри границ блока
      if (rect.top <= offset && rect.bottom >= offset) {
        setActiveCategoryId(categoryId)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Проверка при загрузке

    return () => window.removeEventListener('scroll', handleScroll)
  }, [categoryId, setActiveCategoryId])

  return (
    <div
      className={cn(
        className, 
        // МЕСТО №2: Куда приземляется экран после клика в меню
        'scroll-mt-50 sm:scroll-mt-32.5'
      )}
      ref={containerRef}
      id={title}
    >
      {/* МЕСТО №3: Заголовок */}
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div
        className={cn(
          'grid grid-cols-1 sm:grid-cols-4 gap-8 items-center justify-items-center',
          listClassName
        )}
      >
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}