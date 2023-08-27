import type { PageParams, PageResult } from '@/types/global'
import type { BannerItem, CategoryItem, GuessItem, HotItem } from '@/types/home'
import { http } from '@/utils/http'
/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置 1 为首页（默认值）2 为商品分类页
 */
export const getHomeBanner = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

/**
 * 首页-前台分类-小程序
 */
export const getHomeCategory = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

/**
 * 首页-热门推荐-小程序
 */

export const getHomeHot = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

/**
 * 首页-猜你喜欢-小程序
 */

// {
//   method: 'GET',
//   url: ''
// }
export const getHomeGuess = (data?: PageParams) => {
  return http<PageResult<GuessItem[]>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
