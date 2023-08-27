import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressrStore = defineStore('address', () => {
  // 选中地址
  const selectedAddress = ref<AddressItem>()
  // 修改选中地址
  const changeSelectedAddress = (value: AddressItem) => {
    selectedAddress.value = value
  }
  return {
    selectedAddress,
    changeSelectedAddress,
  }
})
