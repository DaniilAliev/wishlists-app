import './WishlistPageItem.scss'

import AppImage from "@/components/AppImage/AppImage"
import Link from "next/link"

interface WishlistItemProps {
  imgSrc: string
  name: string
  itemCount: number
  link: string
  t: (key: string) => string
}

const WishlistItem: React.FC<WishlistItemProps> = ({
  imgSrc,
  name,
  itemCount,
  link,
  t
}) => {
  return (
    <Link href={link}>
      <div className="discover-page-item">
        <div className="discover-page-item__image">
          <AppImage src={imgSrc} />
        </div>
        <div>
          <p>{name}</p>
        </div>
        <div>
          <span className="text-dark-red text-xs">{`${itemCount} ${t('items')}`}</span>
        </div>
      </div>
    </Link>
  )
}

export default WishlistItem
