import React from 'react'
import Link from 'next/link'
import { ThemeToggle } from '../(theme)/ThemeSwitcher'

interface HeaderProps{
  nick: string,
  highlight: string
}

const Header = ({ nick, highlight }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center my-4">
        <Link href="/" >
            <span className='text-lg font-medium'>{nick}<span className='text-purple-500 text-opacity-90'>{highlight}</span></span>
        </Link>
        <ThemeToggle />
    </header>
  )
}

export default Header