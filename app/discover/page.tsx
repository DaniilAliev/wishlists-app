import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

import AppImage from '@/components/AppImage/AppImage'

export const metadata: Metadata = {
  title: 'Discover',
  description: 'Discover'
}

const mock = [
  { name: `Riley's wishlist`, length: 1, imgSrc: '' },
  { name: `Evelyn's wishlist`, length: 4, imgSrc: '' },
  { name: `Aiden's wishlist`, length: 3, imgSrc: '' }
]

const DiscoverPage = () => {
  const t = useTranslations('Discover')

  return (
    <div className="discover discover__container">
      <div className="grid grid-cols-2 auto-rows-min gap-2">
        {mock.map(item => (
          <div key={item.name} className="grid grid-cols-1 gap-2">
            <div className="h-44">
              <AppImage src={item.imgSrc} />
            </div>
            <p>{item.name}</p>
            <span className="text-dark-red text-xs">{`${item.length} ${t('items')}`}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DiscoverPage
