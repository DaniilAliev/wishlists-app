import Image from 'next/image'
import { FC } from 'react'

import ImagePlaceHolder from '@/assets/images/ImagePlaceholder.svg'

const AppImage: FC<{ src: string | null | undefined }> = ({ src }) => {
  return (
    <div className="app-image relative size-full bg-border-color rounded-xl flex justify-center items-center overflow-hidden">
      {src ? (
        <Image src={src} layout="fill" objectFit="cover" alt="Avatar" />
      ) : (
        <ImagePlaceHolder width={20} height={25} />
      )}
    </div>
  )
}

export default AppImage
