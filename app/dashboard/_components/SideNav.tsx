"use client"
import { FileClock, Home, Menu, Settings, WalletCards, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import UsageTrack from './UsageTrack'
import { UserButton } from '@clerk/nextjs'

function SideNav() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const path = usePathname()

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
            if (window.innerWidth >= 768) {
                setIsOpen(true)
            }
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const MenuList = [
        { name: 'Home', icon: Home, path: '/dashboard' },
        { name: 'History', icon: FileClock, path: '/dashboard/history' },
        { name: 'Billing', icon: WalletCards, path: '/dashboard/billing' },
        { name: 'Setting', icon: Settings, path: '/dashboard/settings' },
    ]

    return (
        <>
            {/* Mobile Header - Combined with user profile */}
            {isMobile && (
                <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40 p-3 flex items-center justify-between md:hidden">
                    {/* Hamburger menu on the left */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="p-2 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                    
                    {/* Logo centered */}
                    <div className="flex-1 flex justify-center">
                       <Link href={'/dashboard'}> <Image src="/logo.svg" alt="logo" width={100} height={40} priority /></Link>
                    </div>
                    
                    {/* User profile button on the right */}
                    <div className="flex items-center justify-center">
                        <UserButton 
                            afterSignOutUrl="/"
                            appearance={{
                                elements: {
                                    avatarBox: "h-8 w-8",
                                    userButtonPopoverCard: "shadow-lg"
                                }
                            }}
                        />
                    </div>
                </div>
            )}

            {/* Sidebar */}
            <aside className={`
                fixed top-0 left-0 h-screen w-64 bg-white shadow-sm border-r z-30
                transition-all duration-300 ease-in-out
                ${isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
            `}>
                <div className="p-5 h-full flex flex-col overflow-y-auto ">
                    <div className="flex justify-center mb-6">
                      <Link href={'/dashboard'}>  <Image src="/logo.svg" alt="logo" width={120} height={100} priority /></Link>
                    </div>
                    <hr className='m-1 border' />
                    
                    <nav className="flex-1 mt-2">
                        {MenuList.map((menu) => (
                            <Link href={menu.path} key={menu.path} passHref>
                                <div 
                                    onClick={() => isMobile && setIsOpen(false)}
                                    className={`
                                        flex items-center gap-3 p-3 mb-2 rounded-lg transition-colors
                                        hover:bg-primary hover:text-white cursor-pointer
                                        ${path === menu.path ? 'bg-primary text-white' : ''}
                                    `}
                                >
                                    <menu.icon className="h-6 w-6 flex-shrink-0" />
                                    <span className="text-lg font-medium">{menu.name}</span>
                                </div>
                            </Link>
                        ))}
                    </nav>

                    <div className="absolute bottom-10 left-0 w-full">
                        <UsageTrack />
                    </div>
                </div>
            </aside>

            {/* Overlay */}
            {isMobile && isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}
        </>
    )
}

export default SideNav