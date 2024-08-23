'use client'

import "./DiscoverPageTabs.scss" 

import AppImage from "@/components/AppImage/AppImage"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import { useTranslations } from "next-intl"
import { useState } from "react"
import DiscoverItem from "./DiscoverPageItem"

const mock = [
  { name: `My wishlist`, length: 1, imgSrc: '', link: '', type: 'presonal' },
  {
    name: `Riley's wishlist`,
    length: 1,
    imgSrc: '',
    link: '',
    type: 'other'
  },
  {
    name: `Evelyn's wishlist`,
    length: 4,
    imgSrc: '',
    link: '',
    type: 'other'
  },
  {
    name: `Aiden's wishlist`,
    length: 3,
    imgSrc: '',
    link: '',
    type: 'other'
  }
]

const DiscoverPageTabs = () => {
  const t = useTranslations('Discover')

  const [value, setValue] = useState('1')

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
                color: '#999999' // Цвет неактивных табов
              },
              '& .Mui-selected': {
                color: '#CE4B4B' // Цвет активного таба
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#CE4B4B' // Цвет индикатора активного таба
              }
            }}
          >
            <Tab label="My" value="1" />
            <Tab label="Others" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" className="discover__tab">
          <div className="grid grid-cols-2 auto-rows-min gap-2">
            {mock
              .filter(item => item.type === 'presonal')
              .map(item => (
                <DiscoverItem
                  key={item.name}
                  imgSrc={item.imgSrc}
                  name={item.name}
                  length={item.length}
                  t={t}
                />
              ))}
          </div>
        </TabPanel>
        <TabPanel value="2" className="discover__tab">
          <div className="grid grid-cols-2 auto-rows-min gap-2">
            {mock
              .filter(item => item.type !== 'presonal')
              .map(item => (
                <DiscoverItem
                  key={item.name}
                  imgSrc={item.imgSrc}
                  name={item.name}
                  length={item.length}
                  t={t}
                />
              ))}
          </div>
        </TabPanel>
      </TabContext>
    </div>
  )
}

export default DiscoverPageTabs
