import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

export const getCategoryTop = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
