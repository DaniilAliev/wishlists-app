import AppImage from "@/components/AppImage/AppImage"

interface DiscoverItemProps {
  imgSrc: string
  name: string
  length: number
  t: (key: string) => string
}

const DiscoverItem: React.FC<DiscoverItemProps> = ({
  imgSrc,
  name,
  length,
  t
}) => {
  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="h-44">
        <AppImage src={imgSrc} />
      </div>
      <p>{name}</p>
      <span className="text-dark-red text-xs">{`${length} ${t('items')}`}</span>
    </div>
  )
}

export default DiscoverItem
