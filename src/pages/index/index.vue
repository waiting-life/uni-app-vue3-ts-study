<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBanner, getHomeCategory, getHomeHot } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { useGuessList } from '@/composables'

const bannerList = ref<BannerItem[]>([])
// 获取首页轮播数据
const getHomeBannerData = async () => {
  try {
    const res = await getHomeBanner()
    bannerList.value = res.result
  } catch (error) {
    console.log(error)
  }
}
// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  try {
    const { result } = await getHomeCategory()
    categoryList.value = result
  } catch (error) {
    console.log(error)
  }
}

// 获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const { result } = await getHomeHot()
  hotList.value = result
}

// 数据是否加载中
const isLoading = ref(false)

// 页面加载
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})

// 滚动触底
const { guessRef, onScrolltolower } = useGuessList()

// 监听下拉刷新
const isTriggered = ref(false)
const onRefresherrefresh = async () => {
  // 加载下拉动画
  isTriggered.value = true

  // await getHomeBannerData()
  // await getHomeCategoryData()
  // await getHomeHotData()

  // 重置猜你喜欢
  guessRef.value?.resetData(),
    await Promise.all([
      getHomeBannerData(),
      getHomeCategoryData(),
      getHomeHotData(),
      guessRef.value?.getMore(),
    ])

  // 数据加载完后关闭下拉动画
  isTriggered.value = false
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 滚动容器 -->
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    scroll-y
    class="scroll"
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 自定义轮播图 -->
      <MySwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotList" />
      <MyGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>
@/services/home
<style lang="scss">
//
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll {
  flex: 1;
}
</style>
