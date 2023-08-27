<template name="skeleton">
  <view class="sk-container">
    <view class="navbar" style="padding-top: 44px">
      <view class="wrap">
        <navigator
          class="back icon-left sk-pseudo sk-pseudo-circle"
          open-type="navigateBack"
        ></navigator>
        <view class="title sk-transparent sk-text-14-2857-313 sk-text">订单详情</view>
      </view>
    </view>
    <scroll-view scroll-y="true" class="viewport" id="scroller">
      <view class="overview sk-image" style="padding-top: 64px">
        <view
          class="status icon-clock sk-transparent sk-text-0-0000-958 sk-text sk-pseudo sk-pseudo-circle"
          >等待付款</view
        >
        <view class="tips">
          <text class="money sk-transparent sk-text-0-0000-311 sk-text">应付金额: ¥ 11.9</text>
          <text class="time sk-transparent sk-text-0-0000-655 sk-text">支付剩余</text>
          <view is="node-modules/@dcloudio/uni-ui/lib/uni-countdown/uni-countdown">
            <view
              class="uni-countdown countdown--uni-countdown data-v-342c352a countdown--data-v-342c352a"
            >
              <text
                class="uni-countdown__number countdown--uni-countdown__number data-v-342c352a countdown--data-v-342c352a sk-transparent sk-text-15-0000-115 sk-text"
                style="
                  color: rgb(255, 255, 255);
                  font-size: 14px;
                  width: 22px;
                  line-height: 20px;
                  border-radius: 3px;
                  background-position-x: 50%;
                "
                >00</text
              >
              <text
                class="uni-countdown__splitor countdown--uni-countdown__splitor data-v-342c352a countdown--data-v-342c352a sk-transparent sk-opacity"
                style="color: #fff; font-size: 12px; margin: "
                >时</text
              >
              <text
                class="uni-countdown__number countdown--uni-countdown__number data-v-342c352a countdown--data-v-342c352a sk-transparent sk-text-15-0000-460 sk-text"
                style="
                  color: rgb(255, 255, 255);
                  font-size: 14px;
                  width: 22px;
                  line-height: 20px;
                  border-radius: 3px;
                  background-position-x: 50%;
                "
                >29</text
              >
              <text
                class="uni-countdown__splitor countdown--uni-countdown__splitor data-v-342c352a countdown--data-v-342c352a sk-transparent sk-opacity"
                style="color: #fff; font-size: 12px; margin: "
                >分</text
              >
              <text
                class="uni-countdown__number countdown--uni-countdown__number data-v-342c352a countdown--data-v-342c352a sk-transparent sk-text-15-0000-106 sk-text"
                style="
                  color: rgb(255, 255, 255);
                  font-size: 14px;
                  width: 22px;
                  line-height: 20px;
                  border-radius: 3px;
                  background-position-x: 50%;
                "
                >48</text
              >
              <text
                class="uni-countdown__splitor countdown--uni-countdown__splitor data-v-342c352a countdown--data-v-342c352a sk-transparent sk-opacity"
                style="color: #fff; font-size: 12px; margin: "
                >秒</text
              >
            </view>
          </view>
        </view>
        <view
          class="button sk-transparent sk-text-28-1250-642 sk-text"
          style="background-position-x: 50%"
          >去支付</view
        >
      </view>
      <view class="shipment">
        <view class="locate sk-image">
          <view class="user sk-transparent sk-text-14-2857-992 sk-text">cpp14567899999</view>
          <view class="address sk-transparent sk-text-14-2857-867 sk-text"
            >北京市 北京市 东城区aaaa</view
          >
        </view>
      </view>
      <view class="goods">
        <view class="item">
          <navigator class="navigator" hover-class="none">
            <image class="cover sk-image"></image>
            <view class="meta">
              <view class="name ellipsis sk-transparent sk-text-14-2857-147 sk-text"
                >列级名庄出品，法国普罗旺斯桃红750毫升</view
              >
              <view class="type sk-transparent sk-text-22-2222-537 sk-text"
                >礼袋（单支/双支均适用）</view
              >
              <view class="price">
                <view class="actual">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="sk-transparent sk-text-14-2857-189 sk-text">4.9</text>
                </view>
              </view>
              <view class="quantity sk-transparent sk-opacity">x1</view>
            </view>
          </navigator>
        </view>
        <view class="total">
          <view class="row">
            <view class="text sk-transparent sk-text-0-0000-485 sk-text">商品总价: </view>
            <view
              class="symbol sk-transparent sk-text-0-0000-849 sk-text sk-pseudo sk-pseudo-circle"
              >4.9</view
            >
          </view>
          <view class="row">
            <view class="text sk-transparent sk-text-0-0000-96 sk-text">运费: </view>
            <view
              class="symbol sk-transparent sk-text-0-0000-164 sk-text sk-pseudo sk-pseudo-circle"
              >7</view
            >
          </view>
          <view class="row">
            <view class="text sk-transparent sk-text-0-0000-249 sk-text">应付金额: </view>
            <view
              class="symbol primary sk-transparent sk-text-0-0000-423 sk-text sk-pseudo sk-pseudo-circle"
              >11.9</view
            >
          </view>
        </view>
      </view>
      <view class="detail">
        <view class="title sk-transparent sk-text-0-0000-905 sk-text">订单信息</view>
        <view class="row">
          <view class="item sk-transparent">
            订单编号: 1695092025176625154
            <text class="copy sk-transparent sk-text-0-0000-538 sk-text">复制</text>
          </view>
          <view class="item sk-transparent sk-text-0-0000-216 sk-text"
            >下单时间: 2023-08-25 23:13:27</view
          >
        </view>
      </view>
      <view is="components/MyGuess" class="r">
        <view class="caption MyGuess--caption">
          <text
            class="text MyGuess--text sk-transparent sk-text-0-0000-154 sk-text sk-pseudo sk-pseudo-circle"
            >猜你喜欢</text
          >
        </view>
        <view class="guess MyGuess--guess">
          <navigator class="guess-item MyGuess--guess-item">
            <image class="image MyGuess--image sk-image" mode="aspectFill"></image>
          </navigator>
          <navigator class="guess-item MyGuess--guess-item">
            <image class="image MyGuess--image sk-image" mode="aspectFill"></image>
          </navigator>
        </view>
      </view>
      <view class="toolbar" style="padding-bottom: 34px">
        <view class="button primary sk-transparent sk-text-14-2857-817 sk-text"> 去支付 </view>
        <view class="button sk-transparent sk-text-14-2857-381 sk-text"> 取消订单 </view>
      </view>
    </scroll-view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-313 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-0-0000-958 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 36rpx;
  position: relative !important;
}
.sk-text-0-0000-311 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text-0-0000-655 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text-15-0000-115 {
  background-image: linear-gradient(
    transparent 15%,
    #eeeeee 0%,
    #eeeeee 85%,
    transparent 0%
  ) !important;
  background-size: 100% 40rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-15-0000-460 {
  background-image: linear-gradient(
    transparent 15%,
    #eeeeee 0%,
    #eeeeee 85%,
    transparent 0%
  ) !important;
  background-size: 100% 40rpx;
  position: relative !important;
}
.sk-text-15-0000-106 {
  background-image: linear-gradient(
    transparent 15%,
    #eeeeee 0%,
    #eeeeee 85%,
    transparent 0%
  ) !important;
  background-size: 100% 40rpx;
  position: relative !important;
}
.sk-text-28-1250-642 {
  background-image: linear-gradient(
    transparent 28.125%,
    #eeeeee 0%,
    #eeeeee 71.875%,
    transparent 0%
  ) !important;
  background-size: 100% 64rpx;
  position: relative !important;
}
.sk-text-14-2857-992 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-867 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-147 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-22-2222-537 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 43.2rpx;
  position: relative !important;
}
.sk-text-14-2857-189 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-0-0000-485 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-849 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-96 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-164 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-249 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-423 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 36rpx;
  position: relative !important;
}
.sk-text-0-0000-905 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30rpx;
  position: relative !important;
}
.sk-text-0-0000-538 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 20rpx;
  position: relative !important;
}
.sk-text-0-0000-216 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-154 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 32rpx;
  position: relative !important;
}
.sk-text-14-2857-817 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-381 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
