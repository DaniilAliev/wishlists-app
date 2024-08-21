'use client'
import React, { FC, useEffect, useState } from 'react'
import EditSVG from '@/assets/images/Edit.svg'
import clsx from 'clsx';

const AppEditField: FC<{ type: string; value: string }> = ({ type, value }) => {
  const [inputValue, setInputValue] = useState<string | ''>(value || '')
  const [isFoused, setIsFocused] = useState<boolean>(false)

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    setInputValue(value || '')
  }, [value])

  return (
    <div>
      <p className={clsx("text-xs pb-1", isFoused ? 'text-dark-red' : 'text-price-color')}>{type}</p>
      <div className="edit-input flex mb-8 items-center">
        <input
          value={inputValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="h-8 size-full bg-background-color text-2xl border-none focus:outline-none"
        />
        <EditSVG />
      </div>
    </div>
  )
}

export default AppEditField
