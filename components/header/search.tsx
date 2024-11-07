'use client'

import React from 'react'
import Form from 'next/form'
import { IoIosSearch } from 'react-icons/io'
import { HiXMark } from 'react-icons/hi2'
import { GoArrowRight } from 'react-icons/go'
export default function Search() {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <button
        title="Buscar productos"
        role="button"
        aria-label="Search"
        onClick={() => setOpen(!open)}
      >
        <IoIosSearch size={25} />
      </button>
      <dialog
        open={open}
        className="top-0 w-full text-white p-5 hidden bg-black open:flex justify-center"
      >
        <div className="w-full h-full relative px-5">
          <Form action="/search" className="w-full flex gap-2 max-w-xl mx-auto">
            <label className="block relative w-full">
              <div className="absolute pointer-events-none inset-y-0 px-4 text-white/30 flex items-center">
                <IoIosSearch size={25} />
              </div>
              <input
                autoFocus
                name="q"
                className="border p-5 text-center px-6 text-white rounded-md w-full bg-black border-neutral-800 placeholder:text-stone-700"
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
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 text-white"
          >
            <HiXMark size={30} />
          </button>
        </div>
      </dialog>
    </>
  )
}
