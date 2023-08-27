import { GoodsItem } from './global'

export interface CategoryTopItem {
  children: CategoryChildItem[]
  id: string
  imageBanners: string[]
  name: string
  picture: string
}

export interface CategoryChildItem {
  /** 商品集合[ 商品项 ] */
  goods: GoodsItem[]
  /** 二级分类id */
  id: string
  /** 二级分类名称 */
  name: string
  /** 二级分类图片 */
  picture: string
}
