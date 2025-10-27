'use client'
import React, { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline'
}

export default function Button({ children, variant = 'primary', className = '', ...rest }: ButtonProps) {
  const base = 'w-full rounded-md py-2.5 text-sm font-medium transition-colors'
  const variants = {
    primary: 'bg-[#644FC1] text-white',
    outline: 'border border-gray-300 text-gray-700 bg-[#F5F5F5]'
  }
  return (
    <button {...rest} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}
