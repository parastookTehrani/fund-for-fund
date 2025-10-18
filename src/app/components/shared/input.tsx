'use client'
import React, { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  helper?: string
}

export default function Input({ label, helper, className = '', ...rest }: InputProps) {
  return (
    <label className="block text-sm text-gray-700 w-full">
      {label && <span className="mb-1 block font-medium">{label}</span>}
      <input
        {...rest}
        className={`w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-transparent px-3 py-2 text-sm placeholder-gray-400 ${className}`}
      />
      {helper && <p className="mt-1 text-xs text-gray-500">{helper}</p>}
    </label>
  )
}
