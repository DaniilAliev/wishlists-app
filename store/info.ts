import { create } from 'zustand'

export interface AppInfoState {
  text: string | null
  type: string | null
  // eslint-disable-next-line no-unused-vars
  setInfo: (text: string, type: string) => void
  reset: () => void
}

export const useInfoStore = create<AppInfoState>(set => ({
  text: null,
  type: null,
  setInfo: (text, type) => set(() => ({ text, type })),
  reset: () => set(() => ({ text: null, type: null }))
}))
