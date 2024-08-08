import MyWishlist from '@/assets/images/MyWishlist.svg'
import Plus from '@/assets/images/Plus.svg'
import RecentlyViewed from '@/assets/images/RecentlyViewed.svg'
import MenuItem from '@/components/MenuItem'
import { MenuItemType } from '@/data/MenuItem/types'

const homeOptions: Array<MenuItemType> = [
  {
    text: 'New WishList',
    type: 'red',
    image: Plus
  },
  {
    text: 'WishLists',
    image: MyWishlist
  },
  {
    text: `Recently Viewed Items`,
    image: RecentlyViewed
  }
]

export default function Home() {
  return (
    <div className="home home-container pt-6">
      {homeOptions.map(item => (
        <MenuItem item={item} key={item.text} />
      ))}
    </div>
  )
}
