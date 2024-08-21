import { FC } from 'react'

import ImagePlaceHolder from '@/assets/images/ImagePlaceholder.svg'

const AppImage: FC<{ src: string }> = ({ src }) => {
  return (
    <div className="size-full bg-border-color rounded-xl min-h-44 flex justify-center items-center">
      <ImagePlaceHolder width={20} height={25} />
    </div>
  )
}

export default AppImage
