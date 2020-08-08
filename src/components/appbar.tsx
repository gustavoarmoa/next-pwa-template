import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getLightMode, toggleLightMode } from '../util/theme'
import button from '../styles/button.module.css'

const Header = () => {
  const [light, setLight] = useState(null)

  useEffect(() => {
    setLight(getLightMode())
  }, [])

  function toggleTheme() {
    toggleLightMode(!light)
    setLight(!light)
  }

  if (light === null) return null

  return (
    <header
      className='px-6 w-full text-fg bg-ui-base border-b flex items-center justify-between fixed top-0 transition-colors duration-150 ease-in-out'
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        height: 'calc(env(safe-area-inset-top) + 72px)',
      }}
    >
      <Link href='/'>
        <a>
          <h1 className='text-sm'>Grapefruit</h1>
        </a>
      </Link>

      <nav className='flex items-center'>
        <button type='button' onClick={toggleTheme} className={button.icon}>
          <svg
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
          >
            {light ? (
              <path
                d='M7.5 3a3.959 3.959 0 00-3.92 3.4l-.01.07a3.951 3.951 0 00.79 2.989c.383.495.64.968.64 1.442V12.5a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-1.599c0-.474.256-.947.64-1.442.63-.814.948-1.875.79-2.99l-.01-.07A3.959 3.959 0 007.5 3zM6 15h3v-1H6v1z'
                fill='currentColor'
              />
            ) : (
              <path
                d='M4.076 6.47l.495.07-.495-.07zm-.01.07l-.495-.07.495.07zm6.858-.07l.495-.07-.495.07zm.01.07l-.495.07.495-.07zM9.5 12.5v.5a.5.5 0 00.5-.5h-.5zm-4 0H5a.5.5 0 00.5.5v-.5zm-.745-3.347l.396-.306-.396.306zm5.49 0l-.396-.306.396.306zM6 15h3v-1H6v1zM3.58 6.4l-.01.07.99.14.01-.07-.99-.14zM7.5 3a3.959 3.959 0 00-3.92 3.4l.99.14A2.959 2.959 0 017.5 4V3zm3.92 3.4A3.959 3.959 0 007.5 3v1a2.96 2.96 0 012.93 2.54l.99-.14zm.01.07l-.01-.07-.99.14.01.07.99-.14zm-.79 2.989c.63-.814.948-1.875.79-2.99l-.99.142a2.951 2.951 0 01-.59 2.236l.79.612zM9 10.9v1.6h1v-1.599H9zm.5 1.1h-4v1h4v-1zm-3.5.5v-1.599H5V12.5h1zM3.57 6.47a3.951 3.951 0 00.79 2.989l.79-.612a2.951 2.951 0 01-.59-2.236l-.99-.142zM6 10.9c0-.823-.438-1.523-.85-2.054l-.79.612c.383.495.64.968.64 1.442h1zm3.85-2.054C9.437 9.378 9 10.077 9 10.9h1c0-.474.257-.947.64-1.442l-.79-.612zM7 0v2h1V0H7zM0 8h2V7H0v1zm13 0h2V7h-2v1zM3.354 3.646l-1.5-1.5-.708.708 1.5 1.5.708-.708zm9 .708l1.5-1.5-.708-.708-1.5 1.5.708.708z'
                fill='currentColor'
              />
            )}
          </svg>
        </button>
        <div className='mx-3 w-px h-6 bg-ui-overlay transition-colors duration-150 ease-in-out' />
        <button type='button' className={button.base}>
          New task
        </button>
      </nav>
    </header>
  )
}

export default Header
