'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import {
  Bars3Icon,
  HomeIcon,
  PencilIcon,
  XMarkIcon,
  DocumentIcon,
  EnvelopeIcon,
  FaceSmileIcon,
  CommandLineIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: true },
  { name: 'About Me', href: '/about-me', icon: FaceSmileIcon, current: false },
  { name: 'Projects', href: '/projects', icon: CommandLineIcon, current: false },
  { name: 'Blog', href: '/blog', icon: PencilIcon, current: false },
  { name: 'Resume', href: '/resume', icon: DocumentIcon, current: false },
  { name: 'Contact/Links', href: '/contact', icon: EnvelopeIcon, current: false },
  { name: 'Video', href: '/video', icon: VideoCameraIcon, current: false },
]


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar({children}: {children: React.ReactNode}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')

  return (
    <>
     
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-sky-900/10 backdrop-blur-sm transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 pb-2 ring-1 ring-white/10 border-r border-white shadow shadow-white">
                <div className="flex h-16 shrink-0 items-center">
                  <Image src="/anthony.jpeg" alt="Profile" width={32} height={32} className="rounded-full" />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              onClick={() => setActiveItem(item.name)}
                              className={classNames(
                                activeItem === item.name
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <item.icon aria-hidden="true" className="size-6 shrink-0" />
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-1/5 lg:flex-col border-r-2 border-white">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            <div className="flex  flex-col items-center mt-4">
              <Image src="/anthony.jpeg" alt="Profile" width={300} height={100} priority className="rounded-full" />
              <div className="text-sm mt-2">Surfing in Tortola, BVI</div>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setActiveItem(item.name)}
                          className={classNames(
                            activeItem === item.name
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon aria-hidden="true" className="size-6 shrink-0" />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>                 
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-black px-4 py-4 shadow-sm sm:px-6 lg:hidden border-b-2 border-white">
          <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-400 lg:hidden">
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
          <div className="flex-1 text-sm/6 font-semibold text-white">Dashboard</div>
          <Link href="#">
            <span className="sr-only">Your profile</span>
            <Image src="/anthony.jpeg" alt="Profile" width={32} height={32} priority className="rounded-full" />
             
          </Link>
        </div>

            <main className="flex flex-col items-right lg:w-4/5 ml-auto py-10 px-12 sm:px-24 lg:px-16">
            <div className="w-full">{children}</div>
            </main>
      </div>
    </>
  )
}
