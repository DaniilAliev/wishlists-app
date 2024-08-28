import './DiscoverPageItem.scss'

import AppImage from "@/components/AppImage/AppImage"
import Link from "next/link"

interface DiscoverItemProps {
  imgSrc: string
  name: string
  length: number
  link: string
  t: (key: string) => string
}

const DiscoverItem: React.FC<DiscoverItemProps> = ({
  imgSrc,
  name,
  length,
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
          <span className="text-dark-red text-xs">{`${length} ${t('items')}`}</span>
        </div>
      </div>
    </Link>
  )
}

export default DiscoverItem
