import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ActiveLink from '../components/ActiveLink'
/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, ReactElement, ReactNode } from 'react'
import { Popover, Transition } from '@headlessui/react'
import MenuIcon from '../assets/menu-icon.svg'
import XIcon from '../assets/x-icon.svg'
import GeckoLogo from '../assets/gecko-logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'

import type { NextPageWithLayout } from './_app'
import Hero from '../components/Hero'

const navigation = [
  { name: 'Electricity', href: '/electricity' },
  { name: 'Water', href: '/water' },
  { name: 'Material Trash', href: '/material-trash' },
  { name: 'Food Trash', href: '/food-trash' },
  { name: 'Recycling', href: '/recycling' },
  { name: 'Poll', href: '/poll' },
]

export const Layout: React.FC<{ children: ReactNode }> = (props) => {
  const router = useRouter()
  console.log('router', router)
  return (
    <>
      <div className='relative h-screen bg-gray-50'>
        <div
          className='hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full'
          aria-hidden='true'>
          <div className='relative h-full mx-auto max-w-7xl'>
            {/* <svg
              className='absolute transform right-full translate-y-1/4 translate-x-1/4 lg:translate-x-1/2'
              width={404}
              height={784}
              fill='none'
              viewBox='0 0 404 784'>
              <defs>
                <pattern
                  id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'>
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill='url(rgba(0,134,119,1)-a58d-4871-961e-36d5016a0f49)'
              />
            </svg>
            <svg
              className='absolute transform left-full -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2'
              width={404}
              height={784}
              fill='none'
              viewBox='0 0 404 784'>
              <defs>
                <pattern
                  id='5d0dd344-b041-4d26-bec4-8d33ea57ec9b'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'>
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill='url(rgba(0,134,119,1)-b041-4d26-bec4-8d33ea57ec9b)'
              />
            </svg> */}
          </div>
        </div>

        <div className='relative pt-6 pb-16 sm:pb-24'>
          <Popover>
            <div className='px-4 mx-auto max-w-7xl sm:px-6'>
              <nav
                className='relative flex items-center justify-between overflow-visible sm:h-10 md:justify-center'
                aria-label='Global'>
                <div className='flex items-center flex-1 md:absolute md:inset-y-0 md:left-0'>
                  <div className='flex items-center justify-between w-full md:w-auto'>
                    <Link href='/'>
                      <a>
                        <span className='sr-only'>Gecko Grit</span>
                        <GeckoLogo className='absolute top-0 z-20 left-5 w-14 h-14' />
                      </a>
                    </Link>
                    <div className='flex items-center -mr-2 md:hidden'>
                      <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-gray-50 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gecko_brand-500'>
                        <span className='sr-only'>Open main menu</span>
                        <MenuIcon
                          className='w-6 h-6 fill-current text-slate-600'
                          aria-hidden='true'
                        />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className='hidden md:flex md:space-x-10'>
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        className={`font-medium text-gray-500 hover:text-gray-900 ${
                          router.pathname === item.href ? 'text-gray-900' : ''
                        }`}>
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter='duration-150 ease-out'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='duration-100 ease-in'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <Popover.Panel
                focus
                className='absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden'>
                <div className='overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5'>
                  <div className='flex items-center justify-between px-5 pt-4'>
                    <div>
                      <GeckoLogo className='w-auto h-8' />
                    </div>
                    <div className='-mr-2'>
                      <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gecko_brand-500'>
                        <span className='sr-only'>Close menu</span>
                        <XIcon
                          className='w-6 h-6 fill-current text-slate-600'
                          aria-hidden='true'
                        />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='px-2 pt-2 pb-6'>
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={`block px-3 py-2 text-base font-medium text-gray-700 rounded-md nav-link hover:text-gray-900 hover:bg-gray-50 ${
                            router.pathname === item.href ? 'text-gray-900' : ''
                          }`}>
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          {props.children}
        </div>
      </div>
    </>
  )
}

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GRIT</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <main className='px-4 mx-auto mt-16 max-w-7xl sm:mt-24'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'> */}
      {/* Global Responsibility Improvement Tracking */}
      {/* <span className='block xl:inline'>Global</span>
            <span className='block text-gecko_brand-600_base xl:inline'>
              Responsibility
            </span>
            <span className='block xl:inline'>Improvement</span>
            <span className='block text-gecko_brand-600_base xl:inline'>Tracking</span> */}
      {/* <span className='block xl:inline'>Sustainability</span>
            <span className='block text-gecko_brand-600_base xl:inline'>Squad</span> */}
      {/* </h1> */}
      {/* <p className='max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
            Do you care?
          </p> */}
      {/* </div>
      </main> */}
      <Hero />

      <footer className={styles.footer}></footer>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
export default Home
