import { cn } from '@/lib/utils'
import { urlFor } from '@/sanity/lib/image'
import { getMyOrders } from '@/sanity/lib/orders/getMyOrders'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function OrdersPage() {
  const { userId } = await auth()

  if (!userId) {
    return redirect('/')
  }

  const orders = await getMyOrders(userId)

  const status = {
    pending: {
      name: 'Pendiente',
      className: 'bg-orange-500/30 text-orange-400'
    },
    paid: {
      name: 'Pagado',
      className: 'bg-green-500/30 text-green-400'
    },
    shipped: {
      name: 'Enviado',
      className: 'bg-blue-500/30 text-blue-400'
    },
    delivered: {
      name: 'Entregado',
      className: 'bg-green-500/30 text-green-400'
    },
    cancelled: {
      name: 'Cancelado',
      className: 'bg-red-500/30 text-red-400'
    }
  }

  return (
    <div className="">
      <div className="divide-y px-2 divide-stone-600">
        {orders.map((order) => {
          return (
            <div
              key={order._id}
              className="px-4 grid lg:grid-cols-2 items-start gap-5 py-5 text-sm"
            >
              <div className="[&>p>span]:text-white space-y-2 text-stone-400">
                <p>
                  Numero de orden:{' '}
                  <span className="block">{order.orderNumber}</span>
                </p>
                <p>
                  Fecha de orden:{' '}
                  <span className="block">
                    {new Date(order.orderDate!).toLocaleDateString()}
                  </span>
                </p>
                <p>
                  Estado:{' '}
                  <small
                    className={cn(
                      status[order.status!].className,
                      'rounded-full block text-xs w-fit px-2 py-0.5'
                    )}
                  >
                    {status[order.status!].name}
                  </small>
                </p>
                <p>
                  Total:{' '}
                  <span className="block">
                    {order.totalPrice?.toLocaleString('es-PE', {
                      style: 'currency',
                      currency: order.currency,
                      currencyDisplay: 'symbol'
                    })}
                  </span>{' '}
                </p>
                {order.ammountDiscount! > 0 && (
                  <div className="bg-red-500/20 p-3 rounded-xl border-stone-400">
                    <p>
                      Descuento aplicado:{' '}
                      <span className="text-red-500">
                        {order.ammountDiscount?.toLocaleString('es-PE', {
                          style: 'currency',
                          currency: order.currency,
                          currencyDisplay: 'symbol'
                        })}
                      </span>
                    </p>
                    <p>
                      SubTotal original:{' '}
                      <span className="text-stone-300">
                        {(
                          (order.totalPrice ?? 0) + (order.ammountDiscount ?? 0)
                        ).toLocaleString('es-PE', {
                          style: 'currency',
                          currency: order.currency,
                          currencyDisplay: 'symbol'
                        })}
                      </span>
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-col px-3 rounded-2xl divide-y divide-stone-700 bg-blue-500/30">
                <h2 className="py-2 text-sm">Items</h2>
                {order.products?.map((product) => {
                  return (
                    <div
                      key={product._key}
                      className="py-3 gap-5 w-full flex items-center"
                    >
                      <div className="w-[60px] rounded-xl min-w-[60px] aspect-square overflow-hidden">
                        <picture>
                          <img
                            className="w-full h-full object-cover"
                            src={urlFor(product.product!.images![0]).url()}
                            alt={product.product?.name}
                          />
                        </picture>
                      </div>
                      <div className="w-full ">
                        <Link
                          className="hover:underline"
                          href={'/products/' + product.product?.slug?.current}
                        >
                          <h3 className="text-sm">{product.product?.name}</h3>
                        </Link>
                        <div className="flex text-sm text-stone-400 items-center">
                          <p className="flex-grow">
                            Cantidad: <span>{product.quantity}</span>
                          </p>
                          <p>
                            {(
                              (product.quantity ?? 0) *
                              (product.product?.price ?? 0)
                            )?.toLocaleString('es-PE', {
                              style: 'currency',
                              currency: 'PEN',
                              currencyDisplay: 'symbol'
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
