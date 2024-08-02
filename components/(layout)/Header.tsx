import React from 'react'
import Link from 'next/link'
import { ThemeToggle } from '../(theme)/ThemeSwitcher'

const Header = () => {
  return (
    <header className="flex justify-between items-center my-4">
        <Link href="/" >
            <h1 className='text-lg font-medium'>rudra<span className='text-purple-500 text-opacity-90'>xd</span></h1>
        </Link>
        <ThemeToggle />
    </header>
  )
}

export default Header