import MySwiper from './MySwiper.vue'
import MyGuess from './MyGuess.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    MySwiper: typeof MySwiper
    MyGuess: typeof MyGuess
  }
}

// 组件实例类型
export type MyGuessInstance = InstanceType<typeof MyGuess>
