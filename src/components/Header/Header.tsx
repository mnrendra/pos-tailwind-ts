import React, { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useLocation } from 'react-router-dom'

import { isJSON, isString } from '../../utils/validator'

const mainNavs = [
  { id: 'dashboard', name: 'dashboard', label: 'Dashboard', href: '/dashboard' },
  { id: 'stock', name: 'stock', label: 'Stock', href: '/stock' },
  { id: 'selling', name: 'selling', label: 'Selling', href: '/selling' },
  { id: 'purchasing', name: 'purchasing', label: 'Purchasing', href: '/purchasing' }
]

const accountNavs = [
  { id: 'profile', name: 'profile', label: 'Profile', href: '/profile' },
  { id: 'settings', name: 'settings', label: 'Settings', href: '/settings' },
  { id: 'signout', name: 'signout', label: 'Sign Out', href: '/signout' }
]

const Header = (): JSX.Element => {
  /**
   * Hooks
   */

  const location = useLocation()

  /**
   * States
   */

  const [activeNav, setActiveNav] = useState('dashboard')

  /**
   * Effects
   */

  useEffect(() => {
    if (isJSON(location) && isString(location.pathname)) {
      setActiveNav(location.pathname)
    }
  }, [location])

  /**
   * Handlers
   */

  /**
   * Renders
   */

  return (
    <Disclosure as='nav' className='flex flex-col bg-gray-800'>
      {({ open }) => (
        <>
          {/* */}
          <div className='flex w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex w-full items-center justify-between h-16'>
              {/* Mobile Menu Button */}
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open
                    ? <XIcon className='block h-6 w-6' aria-hidden='true' />
                    : <MenuIcon className='block h-6 w-6' aria-hidden='true' />}
                </Disclosure.Button>
              </div>
              {/* Desktop Navigation */}
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                  <img className='block lg:hidden h-8 w-auto' src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg' alt='Workflow' />
                  <img className='hidden lg:block h-8 w-auto' src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg' alt='Workflow' />
                </div>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {mainNavs.map((nav) => (
                      <a
                        key={nav.id}
                        href={nav.href}
                        className={activeNav === nav.href
                          ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                        aria-current={activeNav === nav.href ? 'page' : undefined}
                      >
                        {nav.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right Navigation */}
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                {/* Bell Button */}
                <button type='button' className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>
                {/* Account Menu */}
                <Menu as='div' className='ml-3 relative'>
                  <div>
                    <Menu.Button className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                      <span className='sr-only'>Open user menu</span>
                      <img className='h-8 w-8 rounded-full' src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='' />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      {accountNavs.map((nav) => (
                        <Menu.Item key={nav.id}>
                          {({ active }) => (
                            <a
                              href={nav.href}
                              className={active
                                ? 'bg-gray-100 block px-4 py-2 text-sm text-gray-700'
                                : 'block px-4 py-2 text-sm text-gray-700'}
                            >
                              {nav.label}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/* */}
              </div>
              {/* */}
            </div>
          </div>
          {/* Mobile Navigation */}
          <Disclosure.Panel className='flex w-full sm:hidden'>
            <div className='w-full px-2 pt-2 pb-3 space-y-1'>
              {mainNavs.map((nav) => (
                <Disclosure.Button
                  key={nav.id}
                  as='a'
                  href={nav.href}
                  className={activeNav === nav.href
                    ? 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'}
                  aria-current={activeNav === nav.href ? 'page' : undefined}
                >
                  {nav.label}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
          {/* */}
        </>
      )}
    </Disclosure>
  )
}

export default Header
