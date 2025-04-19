import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={'/dashboard/content/'+item?.slug}>
      <div className='
        p-3 sm:p-4 md:p-5 
        shadow-md rounded-md border bg-white 
        flex flex-col gap-2 sm:gap-3 
        cursor-pointer h-full 
        hover:scale-[1.02] sm:hover:scale-105 
        transition-all duration-200
      '>
          <Image 
            src={item.icon} 
            alt='icon' 
            width={40} 
            height={40} 
            className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'
          />
          <h2 className='font-medium text-base sm:text-lg md:text-xl'>{item.name}</h2>
          <p className='text-gray-500 text-sm sm:text-base line-clamp-2 sm:line-clamp-3'>{item.desc}</p>
      </div>
    </Link>
  )
}

export default TemplateCard