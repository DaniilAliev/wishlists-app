import AttachSVG from '@/assets/images/Attach.svg'
import { useTranslations } from 'next-intl'

const AppAddFiles = () => {
  const t = useTranslations('AddItem')

  return (
    <button className='flex items-center gap-2'>
      <AttachSVG />
      <span className='text-dark-red'>{t('addFiles')}</span>
    </button>
  )
}

export default AppAddFiles
