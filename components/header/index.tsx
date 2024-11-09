import Image from 'next/image'
import Link from 'next/link'

import { getPopularCategories } from '@/sanity/lib/categories/getPopularCategories'
import RightHeader from './right'
import LeftHeader from './left'

async function Header() {
  const categories = await getPopularCategories()
  return (
    <header className="flex items-center justify-between h-[90px] px-10">
      <LeftHeader categories={categories} />
      <nav>
        <Link href="/">
          <Image
            title="Ir a la página principal"
            height={70}
            width={70}
            src="/logo.webp"
            alt="Logo 366 Clothing"
          />
        </Link>
      </nav>
      <RightHeader />
    </header>
  )
}

export default Header
