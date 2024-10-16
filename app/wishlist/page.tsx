import { Metadata } from 'next'

import { WishlistServiсe } from '@/data/Wishlist/WishlistService'
import WishlistPageTabs from '@/widgets/WishlistPage/WishlistPageTabs'


export const metadata: Metadata = {
  title: 'Discover',
  description: 'Discover'
}

const DiscoverPage = async () => {
  const data = await WishlistServiсe.getWishlists()

  return (
    <div className="discover discover__container pt-12">
      <WishlistPageTabs data={data} />
    </div>
  )
}

export default DiscoverPage
