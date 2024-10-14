'use client'

import clsx from 'clsx'
import { useEffect } from 'react'

import { AppInfoType } from '@/data/AppInfo/constants'
import { AppInfoState, useInfoStore } from '@/store/info'

// eslint-disable-next-line no-unused-vars
type TextSelector = (state: AppInfoState) => string | null

const AppInfo = () => {
  const text = useInfoStore((state: AppInfoState) => state.text)
  const type = useInfoStore((state: AppInfoState) => state.type)
  const resetInfo = useInfoStore((state: AppInfoState) => state.reset)

  useEffect(() => {
    return () => {
      resetInfo()
    }
  }, [resetInfo])

  return (
    <>
      {text && (
        <div
          className={clsx(
            'p-2.5 mt-2.5 flex justify-center rounded-xl',
            type === AppInfoType.Info
              ? 'bg-cyan-100 text-cyan-500'
              : 'bg-rose-300 text-rose-500'
          )}
        >
          {text}
        </div>
      )}
    </>
  )
}

export default AppInfo
