import clsx from 'clsx'
import './index.scss'

import CloseSVG from '@/assets/images/Close.svg'
import AppModalInput from './AppModalInput'
import AppModalLink from './AppModalLInk'
import { FC } from 'react'

interface IAppModal {
  type: 'input' | 'link' | ''
  setIsOpen: (_: 'input' | 'link' | '') => void
}


const AppModal: FC<IAppModal> = ({ type, setIsOpen }) => {
  const modalMap: { [key: string]: React.ReactElement } = {
    input: <AppModalInput />,
    link: <AppModalLink />
  }

  return (
    <div
      className={clsx(
        'modal fixed bottom-0 left-0 right-0 py-4 px-4',
        type && 'modal--active'
      )}
    >
      <div className="flex justify-end">
        <button onClick={() => setIsOpen('')}>
          <CloseSVG />
        </button>
      </div>

      {modalMap[type]}
    </div>
  )
}

export default AppModal
