'use client'
import React, { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline'
}

export default function Button({ children, variant = 'primary', className = '', ...rest }: ButtonProps) {
  const base = 'w-full rounded-md py-2.5 text-sm font-medium transition-colors'
  const variants = {
    primary: 'bg-violet-600 text-white hover:bg-violet-700',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100'
  }
  return (
    <button {...rest} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}
