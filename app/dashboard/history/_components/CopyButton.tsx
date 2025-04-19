"use client"
import { Button } from '@/components/ui/button'
import React from 'react'

function CopyButton({aiResponse}: any) {
  const handleCopy = () => {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea')
    textarea.value = aiResponse
    textarea.style.position = 'fixed'  // Prevent scrolling to bottom
    document.body.appendChild(textarea)
    textarea.select()
    
    try {
      // Try modern clipboard API first
      if (navigator.clipboard) {
        navigator.clipboard.writeText(aiResponse)
      } 
      // Fallback for older browsers
      else {
        document.execCommand('copy')
      }
    } catch (err) {
      console.error('Failed to copy text: ', err)
    } finally {
      // Clean up
      document.body.removeChild(textarea)
    }
  }

  return (
    <div>
      <Button 
        variant='ghost' 
        className='text-primary'
        onClick={handleCopy}
      >
        Copy
      </Button>
    </div>
  )
}

export default CopyButton