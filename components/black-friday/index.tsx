import { COUPON_CODES } from '@/sanity/lib/sale/couponCode'
import { getActiveSaleByCouponCode } from '@/sanity/lib/sale/getActiveSaleByCouponCode'
import React from 'react'

export default async function BlackFridayBanner() {
  const sale = await getActiveSaleByCouponCode(COUPON_CODES.BLACKFRIDAY)

  if (!sale) return null
  return (
    <div className="text-center border-y border-dashed py-6 border-stone-600">
      <h3 className="text-3xl font-larken tracking-tight">{sale.title}</h3>
      <p className="text-sm text-stone-300">
        Usa el código{' '}
        <span className="font-bold text-lime-500">{sale.couponCode}</span> para
        obtener un <span className="font-semibold">{sale.discountAmount}%</span>{' '}
        de descuento en tus compras.
      </p>
    </div>
  )
}
