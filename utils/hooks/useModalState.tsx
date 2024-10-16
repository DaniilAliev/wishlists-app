import { ModalType } from "@/data/AppModal/types"
import { useState } from "react"

export const useModalState = () => {
  const [modalType, setModalType] = useState<ModalType>('')

  return ({modalType, setModalType})
}