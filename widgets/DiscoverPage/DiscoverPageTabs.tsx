'use client'

import "./DiscoverPageTabs.scss" 

import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import { useTranslations } from "next-intl"
import { useState } from "react"
import DiscoverItem from "./DiscoverPageItem"

const mock = [
  {
    name: `My wishlist`,
    length: 1,
    imgSrc: '',
    link: '/wishlist/my/1',
    type: 'presonal'
  },
  {
    name: `Riley's wishlist`,
    length: 1,
    imgSrc: '',
    link: '/wishlist/others/1',
    type: 'other'
  },
  {
    name: `Evelyn's wishlist`,
    length: 4,
    imgSrc: '',
    link: '/wishlist/others/1',
    type: 'other'
  },
  {
    name: `Aiden's wishlist`,
    length: 3,
    imgSrc: '',
    link: '/wishlist/others/1',
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
            {mock
              .filter(item => item.type === 'presonal')
              .map(item => (
                <DiscoverItem
                  key={item.name}
                  imgSrc={item.imgSrc}
                  name={item.name}
                  length={item.length}
                  link={item.link}
                  t={t}
                />
              ))}
          </div>
        </TabPanel>
        <TabPanel value="2" className="discover__tab">
          <div className="discover__tab-container">
            {mock
              .filter(item => item.type !== 'presonal')
              .map(item => (
                <DiscoverItem
                  key={item.name}
                  imgSrc={item.imgSrc}
                  name={item.name}
                  length={item.length}
                  link={item.link}
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
