export const COUPON_CODES = {
  BLACKFRIDAY: 'BLACKFRIDAY',
  CYBER: 'CYBER',
  NY2024: 'NY2024'
} as const

export type CouponCode = keyof typeof COUPON_CODES
