/** 订单状态，1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消 */
export enum OrderStateEnum {
  PendingPay = 1,
  PendingDeliver = 2,
  PendingReceive = 3,
  PendingEvaluate = 4,
  Finished = 5,
  Canceled = 6,
}
export enum OrderStateTextEnum {
  '待付款' = 1,
  '待发货' = 2,
  '待收货' = 3,
  '待评价' = 4,
  '已完成 ' = 5,
  '已取消' = 6,
}
