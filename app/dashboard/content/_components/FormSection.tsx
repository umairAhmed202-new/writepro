"use client"
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
    selectedTemplate?: TEMPLATE;
    userFormInput: any,
    loading: boolean
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
    const [formData, setFormData] = useState<any>();

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        userFormInput(formData)
    }

    return (
        <div className='p-4 sm:p-5 shadow-md border rounded-lg bg-white mx-2 sm:mx-0'>
            {/* @ts-ignore */}
            <Image src={selectedTemplate?.icon}
                alt='icon' 
                width={70} 
                height={70}
                className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16'
            />
            <h2 className='font-bold text-xl sm:text-2xl mb-2 mt-3 sm:mt-4 text-primary'>{selectedTemplate?.name}</h2>
            <p className='text-gray-500 text-xs sm:text-sm'>{selectedTemplate?.desc}</p>

            <form className='mt-4 sm:mt-6' onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <div key={index} className='my-2 flex flex-col gap-2 mb-5 sm:mb-7'>
                        <label className='font-bold text-sm sm:text-base'>{item.label}</label>
                        {item.field == 'input' ?
                            <Input 
                                name={item.name} 
                                required={item?.required}
                                onChange={handleInputChange}
                                className='text-sm sm:text-base'
                            />
                            : item.field == 'textarea' ?
                            <>
                                <Textarea 
                                    name={item.name} 
                                    required={item?.required}
                                    rows={4}
                                    className='text-sm sm:text-base min-h-[120px] sm:min-h-[150px]'
                                    maxLength={2000}
                                    onChange={handleInputChange} 
                                /> 
                                <label className='text-xs text-gray-400'>Note: Max 2000 Words</label>
                            </>    
                            : null
                        }
                    </div>
                ))}
                <Button 
                    type="submit" 
                    className='w-full py-4 sm:py-6 text-sm sm:text-base'
                    disabled={loading}
                >
                    {loading && <Loader2Icon className='animate-spin mr-2 h-4 w-4'/>}
                    Generate Content
                </Button>
            </form>
        </div>
    )
}

export default FormSection