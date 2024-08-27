'use client'

import PlusSvg from '@/assets/images/Plus.svg'
import DownloadSvg from '@/assets/images/Download.svg'
import AppAddItemOrLink from '@/components/AppAddItemOrLink'
import { useTranslations } from 'next-intl'
import AppModal from '@/components/AppModal'
import { useState } from 'react'


const PageAddItem = () => {
  const t = useTranslations('AddItem')

  const [modalType, setModalType] = useState<'input' | 'link' | ''>('')

  return (
    <>
      <div className="add-item add-item__container size-full flex flex-col justify-center items-center pt-16 pb-4">
        <AppAddItemOrLink
          svg={<PlusSvg width={83} height={83} />}
          text={t('add')}
          type={'red'}
          onClick={() => setModalType('input')}
        />
        <div className="py-4 text-price-color flex w-full items-center gap-4">
          <div className="border border-border-color w-full h-px" />
          <div>{t('or')}</div>
          <div className="border border-border-color w-full h-px" />
        </div>
        <AppAddItemOrLink
          svg={<DownloadSvg width={83} height={83} />}
          text={t('link')}
          onClick={() => setModalType('link')}
        />
      </div>

      <AppModal type={modalType} setIsOpen={setModalType} />
    </>
  )
}

export default PageAddItem
