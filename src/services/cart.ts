import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'

// POST /member/cart
// Body 参数 (application/json)
// skuId 必需
// count 必需

/**
 * 添加购物车
 */
interface AddCartParams {
  skuId: string
  count: number
}

export const postMemberCart = (data: AddCartParams) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}

// 获取购物车列表
// GET /member/cart
export const getMemberCart = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}

//DELETE /member/cart
export const deleteMemberCartByIds = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })
}

// PUT/member/cart/{skuId}
// 修改购物车单品
export const putMemberCartBySkuId = (
  skuId: string,
  data: { selected?: boolean; count?: number },
) => {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}

/**
 * 购物车全选/取消全选
 * @param data selected 是否选中
 */
export const putMemberCartSelected = (data: { selected: boolean }) => {
  return http({
    method: 'PUT',
    url: '/member/cart/selected',
    data,
  })
}
