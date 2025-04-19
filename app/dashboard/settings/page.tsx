import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function settings() {
  return (
    <div className='flex items-center justify-center h-full mt-3'>
      <UserProfile routing="hash"/>
    </div>
  )
}

export default settings