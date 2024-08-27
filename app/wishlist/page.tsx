import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

import AppImage from '@/components/AppImage/AppImage'
import DiscoverPageTabs from '@/widgets/DiscoverPage/DiscoverPageTabs'

export const metadata: Metadata = {
  title: 'Discover',
  description: 'Discover'
}

// const mock = [
//   { name: `My wishlist`, length: 1, imgSrc: '', link: '' },
//   { name: `Riley's wishlist`, length: 1, imgSrc: '', link: '' },
//   { name: `Evelyn's wishlist`, length: 4, imgSrc: '', link: '' },
//   { name: `Aiden's wishlist`, length: 3, imgSrc: '', link: '' }
// ]

const DiscoverPage = () => {
  return (
    <div className="discover discover__container pt-12">
      <DiscoverPageTabs />
    </div>
  )
}

export default DiscoverPage
