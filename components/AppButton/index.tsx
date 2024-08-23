'use client'

import clsx from "clsx"
import { FC } from "react"

interface IButton {
  text: string
  width?: string
  className?: string
  color: 'red' | 'grey' | 'transparent',
  type?: "button" | "submit" | "reset",
  onRowClick?: () => void
}

const AppButton: FC<IButton> 
  & React.ComponentProps<'button'> = 
  (
    {
      text, 
      className, 
      width, 
      color, 
      type, 
      onRowClick, 
      ...props}
  ) => {
  return (
    <button
      type={type}
      onClick={onRowClick}
      className={clsx(
        'h-12 rounded-3xl',
        className,
        width,
        color === 'red' && 'bg-red-500 hover:bg-red-600',
        color === 'transparent' && 'bg-transparent',
        color === 'grey' && 'bg-gray-200 hover:bg-gray-300',
        color === 'red' ? 'text-white' : 'text-black'
      )}
      {...props}
    >
      {text}
    </button>
  )
}

export default AppButton
