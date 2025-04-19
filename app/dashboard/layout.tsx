"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UserSubscriptionContext } from '../(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [totalUsage,setTotalUsage]=useState<Number>(0);
    const [userSubscription,setUserSubscription]=useState<boolean>(false);
    const [updateCreditUsage,setUpdateCreditUsage]=useState<any>()

  return (
    <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
      <UserSubscriptionContext.Provider value={{userSubscription,setUserSubscription}}>
        <UpdateCreditUsageContext.Provider value={{updateCreditUsage,setUpdateCreditUsage}}>
        <div className='bg-slate-100 min-h-screen'>
    {/* SideNav is now self-contained with mobile handling */}
    <SideNav/>
    
    {/* Main content area */}
    <div className='md:ml-64 pt-16 md:pt-0'>
        <Header/>
        {children}
    </div>
</div>
    </UpdateCreditUsageContext.Provider>
    </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
  )
}

export default layout