'use client'

import clsx from 'clsx'
import React, { FC, MouseEventHandler, SVGProps } from 'react'

interface IAppAddItemOrLink {
  text: string
  type?: 'red'
  svg: React.ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

const AppAddItemOrLink: FC<IAppAddItemOrLink> = ({ svg, text, type, onClick }) => {
  return (
    <button
    onClick={onClick}
      className={clsx(
        'add-item__item',
        'size-full',
        'flex-1',
        'border-2',
        type === 'red' ? 'border-dark-red' : 'border-border-color',
        'flex',
        'flex-col',
        'items-center',
        'justify-between',
        'min-h-60',
        'rounded-2xl'
      )}
    >
      <div className="size-full flex justify-center items-center">{svg}</div>
      <div className="mb-8 text-2xl">{text}</div>
    </button>
  )
}

export default AppAddItemOrLink
