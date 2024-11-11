import React from 'react'

export default function Footer() {
  return (
    <div className="p-5 text-sm">
      {/* This is a demo Ecommerce Created by{' '}
      <a
        href="https://daustinn.com"
        target="_blank"
        className="hover:underline"
      >
        &copy;Daustinn
      </a> */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="border-t py-6 pb-0 text-sm border-neutral-700">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
            <p>
              © 2023-{new Date().getFullYear()} 366 Clothing, Inc. All rights
              reserved.
            </p>
            <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
            <p>
              <a
                href="https://daustinn.com/ecommerce"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View the source
              </a>
            </p>
            <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
            <p>
              <a
                href="https://daustinn.com"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Created by Daustinn
              </a>
            </p>
            <p className="md:ml-auto">
              <a
                href="https://vercel.com"
                rel="noopener noreferrer"
                target="_blank"
                className="text-white hover:underline"
              >
                Deployed on ▲ Vercel
              </a>
            </p>
          </div>
          {/* <div className="mx-auto flex pt-5 w-full max-w-7xl flex-col text-xs justify-center items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
            <p className="text-yellow-400">
              This is a demo Ecommerce please do not use real data.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  )
}
