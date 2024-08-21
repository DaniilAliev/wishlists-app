import { useTranslations } from 'next-intl'

import MyWishlist from '@/assets/images/MyWishlist.svg'
import Plus from '@/assets/images/Plus.svg'
import RecentlyViewed from '@/assets/images/RecentlyViewed.svg'
import MenuItem from '@/components/MenuItem'
import { MenuItemType } from '@/data/MenuItem/types'

export default function Home() {
  const t = useTranslations('HomePage')

  const homeOptions: Array<MenuItemType> = [
    {
      text: t('newWishlist'),
      type: 'red',
      image: Plus
    },
    {
      text: t('wishlists'),
      image: MyWishlist
    },
    {
      text: t('recentlyViewed'),
      image: RecentlyViewed
    }
  ]

  return (
    <div className="home home-container pt-6">
      {homeOptions.map(item => (
        <MenuItem item={item} key={item.text} />
      ))}
    </div>
  )
}
