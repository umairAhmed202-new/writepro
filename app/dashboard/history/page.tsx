import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { currentUser } from '@clerk/nextjs/server'
import { desc, eq } from 'drizzle-orm'
import Image from 'next/image'
import React from 'react'
import { TEMPLATE } from '../_components/TemplateListSection'
import CopyButton from './_components/CopyButton'

export interface HISTORY {
    id: Number,
    formData: string,
    aiResponse: string,
    templateSlug: string,
    createdBy: string,
    createdAt: string
}

async function History() {
    const user = await currentUser();

    {/* @ts-ignore */}
    const HistoryList: HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(AIOutput.id));

    const GetTemplateName = (slug: string) => {
        const template: TEMPLATE | any = Templates?.find((item) => item.slug == slug)
        return template;
    }

    return (
        <div className='mx-2 sm:mx-5 p-3 sm:p-5 border rounded-lg bg-white mt-5'>
            <h2 className='font-bold text-2xl sm:text-3xl'>History</h2>
            <p className='text-gray-500 text-sm sm:text-base'>Search your previously generated content</p>
            
            {/* Header - hidden on small screens */}
            <div className='hidden sm:grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3'>
                <h2 className='col-span-2'>TEMPLATE</h2>
                <h2 className='col-span-2'>AI RESP</h2>
                <h2>DATE</h2>
                <h2>WORDS</h2>
                <h2>COPY</h2>
            </div>
            
            {HistoryList.map((item: HISTORY) => (
                <React.Fragment key={item.id.toString()}>
                    {/* Desktop View */}
                    <div className='hidden sm:grid grid-cols-7 my-5 py-3 px-3'>
                        <h2 className='col-span-2 flex gap-2 items-center'>
                            <Image src={GetTemplateName(item?.templateSlug)?.icon} width={25} height={25} alt='icon' />
                            {GetTemplateName(item.templateSlug)?.name}
                        </h2>
                        <h2 className='col-span-2 line-clamp-3 mr-3'>{item?.aiResponse}</h2>
                        <h2>{item.createdAt}</h2>
                        <h2>{item?.aiResponse.length}</h2>
                        <h2>
                            <CopyButton aiResponse={item.aiResponse} />
                        </h2>
                    </div>
                    
                    {/* Mobile View */}
                    <div className='sm:hidden border rounded-lg p-3 my-3'>
                        <div className='flex justify-between items-start'>
                            <div className='flex items-center gap-2'>
                                <Image src={GetTemplateName(item?.templateSlug)?.icon} width={20} height={20} alt='icon' />
                                <h2 className='font-medium'>{GetTemplateName(item.templateSlug)?.name}</h2>
                            </div>
                            <div className='text-sm text-gray-500'>{item.createdAt}</div>
                        </div>
                        <div className='mt-2'>
                            <p className='text-sm line-clamp-2'>{item?.aiResponse}</p>
                            <div className='flex justify-between items-center mt-2'>
                                <span className='text-xs text-gray-500'>{item?.aiResponse.length} characters</span>
                                <CopyButton aiResponse={item.aiResponse} />
                            </div>
                        </div>
                    </div>
                    
                    <hr className='hidden sm:block' />
                </React.Fragment>
            ))}
        </div>
    )
}

export default History;