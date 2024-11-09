import Image from 'next/image'
import Link from 'next/link'

import Search from './search'
import Cart from './cart'
import User from './user'
import PopularCategories from './categories'

function Header() {
  return (
    <header className="flex items-center justify-between h-[90px] px-10">
      <nav className="flex flex-grow basis-0 text-sm">
        <PopularCategories />
      </nav>
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
      <nav className="flex flex-grow items-center gap-8 basis-0 justify-end">
        <Cart />
        <Search />
        <User />
      </nav>
    </header>
  )
}

export default Header
