'use client'

import Form from 'next/form'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { IoIosSearch } from 'react-icons/io'

export default function Search() {
  const searchParams = useSearchParams()
  const q = searchParams.get('q')

  const router = useRouter()
  const pathname = usePathname()

  const handleSearch = (q?: string) => {
    const currentSearchParams = new URLSearchParams(
      Array.from(searchParams.entries())
    )

    if (!q) {
      currentSearchParams.delete('q')
    } else currentSearchParams.set('q', q)
    const search = currentSearchParams.toString()
    const query = search ? `?${search}` : ''
    router.push(`${pathname}${query}`)
  }

  return (
    <div>
      <Form action="/products" className="w-full flex gap-2 max-w-xl mx-auto">
        <label className="block relative w-full">
          <div className="absolute pointer-events-none inset-y-0 px-4 text-white/30 flex items-center">
            <IoIosSearch size={25} />
          </div>
          <input
            autoFocus
            name="q"
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={q || ''}
            className="border p-5 w-[300px] px-12 text-white rounded-md bg-black border-neutral-800 placeholder:text-stone-700"
            placeholder="Buscar"
          />
          <div className="absolute inset-y-0 right-0 flex justify-center">
            <button
              title="Buscar"
              className="hover:scale-110 px-4 transition-transform"
            >
              <GoArrowRight size={25} />
            </button>
          </div>
        </label>
      </Form>
    </div>
  )
}
