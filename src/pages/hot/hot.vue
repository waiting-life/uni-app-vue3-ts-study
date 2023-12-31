<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { getHotRecommend } from '@/services/hot'
import { ref } from 'vue'
import type { SubTypeItem } from '@/types/hot'

// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]

// uni-app获取页面参数写法
const query = defineProps<{
  type: string
}>()

const currentHot = hotMap.find((hot) => hot.type === query.type)
uni.setNavigationBarTitle({ title: currentHot!.title })

// 推荐封面图
const bannerPicture = ref('')
// 推荐选项
const subTypes = ref<(SubTypeItem & { finish?: boolean })[]>([])
const activeIndex = ref(0)

// 获取热门数据
const getHotRecommendData = async () => {
  const { result } = await getHotRecommend(currentHot!.url, {
    page: import.meta.env.DEV ? 30 : 1,
    pageSize: 10,
  })
  bannerPicture.value = result.bannerPicture
  subTypes.value = result.subTypes
}
// 滚动触底
const onScrolltolower = async () => {
  // 获取当前选项数据
  const curSubType = subTypes.value[activeIndex.value]
  if (curSubType.goodsItems.page < curSubType.goodsItems.pages) {
    // 当前选项页码累加
    curSubType.goodsItems.page++
    // 调用API传惨
    const { result } = await getHotRecommend(currentHot!.url, {
      subType: curSubType.id,
      page: curSubType.goodsItems.page,
      pageSize: curSubType.goodsItems.pageSize,
    })
    // 新的列表数据
    const newSubTypes = result.subTypes[activeIndex.value]
    // 数组追加
    curSubType.goodsItems.items.push(...newSubTypes.goodsItems.items)
  } else {
    // 标记已结束
    curSubType.finish = true
    // 退出并轻提示
    return uni.showToast({
      icon: 'none',
      title: '没有更多数据~',
    })
  }
}

onLoad(() => {
  getHotRecommendData()
})
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="bannerPicture" />
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        v-for="(item, index) in subTypes"
        :key="item.id"
        class="text"
        :class="{ active: index === activeIndex }"
        @tap="activeIndex = index"
      >
        {{ item.title }}
      </text>
    </view>
    <!-- 推荐列表 -->
    <scroll-view
      scroll-y
      class="scroll-view"
      v-for="(item, index) in subTypes"
      v-show="activeIndex === index"
      :key="item.id"
      @scrolltolower="onScrolltolower"
    >
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in item.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
        >
          <image class="thumb" :src="goods.picture" />
          <view class="name ellipsis">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{ item.finish ? '没有更多数据~' : '正在加载中...' }}</view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.scroll-view {
  flex: 1;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
