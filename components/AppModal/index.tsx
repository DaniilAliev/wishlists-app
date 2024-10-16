import clsx from 'clsx'
import './index.scss'

import CloseSVG from '@/assets/images/Close.svg'
import AppModalInput from './AppModalInput'
import AppModalLink from './AppModalLInk'
import { FC } from 'react'
import { ModalType } from '@/data/AppModal/types'
import AppModalAddWishlist from './AppModalAddWishlist'

interface IAppModal {
  type: ModalType
  setIsOpen: (_: ModalType) => void
}


const AppModal: FC<IAppModal> = ({ type, setIsOpen }) => {
  const modalMap: { [key: string]: React.ReactElement } = {
    input: <AppModalInput />,
    link: <AppModalLink />,
    addItems: <AppModalAddWishlist />
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
