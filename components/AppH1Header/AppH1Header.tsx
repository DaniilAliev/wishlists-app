import { FC } from 'react'

const AppH1Header: FC<{ text: string }> = ({ text }) => {
  return <h1 className="text-4xl">{text}</h1>
}

export default AppH1Header
