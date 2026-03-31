'use client'

import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'
import { Logs, X } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Categories } from './categories/categories'

interface Props {
  className?: string
}

export const HamburgerMenu: React.FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)

  // Блокировка скролла страницы при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <div className={cn('sm:hidden', className)}>
      {/* Кнопка открытия */}
      <Button
        onClick={toggleMenu}
        size="sm"
        variant="default"
        className="relative z-10"
      >
        <Logs size={24} />
      </Button>

      {/* Затемнение фона (Backdrop) */}
      <div
        onClick={toggleMenu}
        className={cn(
          'fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      />

      {/* Само выезжающее меню (Drawer) *) */}
      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-[80%] max-w-[350px] bg-white shadow-xl transition-transform duration-500 ease-in-out border-l',
          'flex flex-col', // Внутренняя раскладка в колонку
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* ============================================================ */}
        {/* ИЗМЕНЕННЫЙ БЛОК: ШАПКА МЕНЮ */}
        {/* ============================================================ */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          {/* Группа Логотип + Текст */}
          <div className="flex items-center">
            <div className="relative w-8 h-8">
              <Image
                className="object-contain"
                src="/logo1.png"
                fill
                alt="Logo"
              />
            </div>
            <h1 className="text-sm uppercase font-black pl-2 tracking-tighter">
              QAF GROZNY
            </h1>
          </div>

          {/* Кнопка закрытия */}
          <button 
            onClick={toggleMenu}
            className="p-1 text-gray-400 hover:text-black transition-colors"
          >
            <X size={22} />
          </button>
        </div>
        {/* ============================================================ */}


        {/* Контент меню (Список категорий) */}
        <div className="flex-1 overflow-y-auto py-5 px-3">
          {/* Важно: Передаем setIsOpen, чтобы при клике на категорию 
              меню само закрывалось (хороший UX)
          */}
          <Categories pressing={isOpen} setPressing={setIsOpen} />
        </div>
      </div>
    </div>
  )
}