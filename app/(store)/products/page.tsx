import React from 'react'

export default function ProductsPage({
  searchParams
}: {
  searchParams: {
    q?: string | null | undefined
  }
}) {
  return <div>{searchParams.q}</div>
}
