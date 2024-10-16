'use client'

import './WishlistPageTabs.scss'

import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import { useTranslations } from 'next-intl'
import { FC, useState } from 'react'

import WishlistItem from './WishlistPageItem'
import { WishlistPageTabsType } from '@/data/Wishlist/types'
import WishlistPageAddItem from './WishlistPageAddItem'
import AppModal from '@/components/AppModal'
import { useModalState } from '@/utils/hooks/useModalState'


const WishlistPageTabs: FC<{ data: WishlistPageTabsType }> = ({ data }) => {
  const t = useTranslations('Discover')

  const [value, setValue] = useState('1')
    const {modalType, setModalType} = useModalState()

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <div className="discover__tabs">
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            sx={{
              '& .MuiTab-root': {
                color: '#999999'
              },
              '& .mui-16vm3f9-MuiButtonBase-root-MuiTab-root.Mui-selected ': {
                color: '#CE4B4B'
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#CE4B4B'
              }
            }}
          >
            <Tab label="My" value="1" />
            <Tab label="Others" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" className="discover__tab">
          <div className="discover__tab-container">
            {data.myWishlists.map(item => (
              <WishlistItem
                key={item.name}
                imgSrc={item.imageUrl}
                name={item.name}
                itemCount={item.itemCount}
                link={'/wishlist/my/1'}
                t={t}
              />
            ))}

            <div onClick={() => setModalType('addItems')}>
              <WishlistPageAddItem />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2" className="discover__tab">
          <div className="discover__tab-container">
            {data.friendsWishlist.map(item => (
              <WishlistItem
                key={item.name}
                imgSrc={item.imageUrl}
                name={item.name}
                itemCount={item.itemCount}
                link={'/wishlist/my/1'}
                t={t}
              />
            ))}

            <div onClick={() => setModalType('addFriend')}>
              <WishlistPageAddItem />
            </div>
          </div>
        </TabPanel>
      </TabContext>

      <AppModal type={modalType} setIsOpen={setModalType} />
    </div>
  )
}

export default WishlistPageTabs
