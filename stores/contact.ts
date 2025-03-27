import { defineStore } from 'pinia'

export interface ContactState {
  panelOpen: boolean
}

export const useContactStore = defineStore('contact', {
  state: (): ContactState => ({
    panelOpen: false,
  }),
  actions: {
    setPanelOpen(val: boolean) {
      this.panelOpen = val
    },
  },
})
