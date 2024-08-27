import { useTranslations } from 'next-intl'

import MyWishlist from '@/assets/images/MyWishlist.svg'
import Plus from '@/assets/images/Plus.svg'
import RecentlyViewed from '@/assets/images/RecentlyViewed.svg'
import AppMenuItem from '@/components/AppMenuItem'
import { AppMenuItemType } from '@/data/AppMenuItem/types'
import { NAV_ROUTES } from '@/router/navRoutes'
import { NAV_NAME } from '@/data/Nav/constants'

export default function Home() {
  const t = useTranslations('HomePage')

  const homeOptions: Array<AppMenuItemType> = [
    {
      text: t('newWishlist'),
      type: 'red',
      image: Plus,
      link: NAV_ROUTES[NAV_NAME.ADD_ITEM]
    },
    {
      text: t('wishlists'),
      image: MyWishlist,
      link: NAV_ROUTES[NAV_NAME.ADD_ITEM]
    },
    {
      text: t('recentlyViewed'),
      image: RecentlyViewed,
      link: NAV_ROUTES[NAV_NAME.ADD_ITEM]
    }
  ]

  return (
    <div className="home home-container pt-24">
      {homeOptions.map(item => (
        <AppMenuItem item={item} key={item.text} />
      ))}
    </div>
  )
}
