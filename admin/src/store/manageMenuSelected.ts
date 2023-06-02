import { create } from 'zustand'

interface ItemManageMenuSelected {
  [key: string]: boolean
}

type ManageMenuSelectedStore = {
  itemMenuSelected: ItemManageMenuSelected
  setItemMenuSelected(id: number): void
  forceOpenMenuSelectedById(id: number): void
  clearItemMenuSelected(id: number): void
}

export const useItemManageMenuSelected = create<ManageMenuSelectedStore>(
  (set) => ({
    itemMenuSelected: {},
    setItemMenuSelected(id: number) {
      set((state) => {
        const newItemSelected = {
          ...state.itemMenuSelected,
          [id]: !state.itemMenuSelected[id],
        }
        return { ...state, itemMenuSelected: newItemSelected }
      })
    },

    forceOpenMenuSelectedById(id: number) {
      set((state) => {
        const newItemSelected = {
          [id]: true,
        }
        return { ...state, itemMenuSelected: newItemSelected }
      })
    },

    clearItemMenuSelected(id: number) {
      set((state) => {
        const newItemSelected: ItemManageMenuSelected = {}
        Object.keys(state.itemMenuSelected).forEach((key) => {
          newItemSelected[key] = id === Number(key)
        })
        return { ...state, itemMenuSelected: newItemSelected }
      })
    },
  }),
)
