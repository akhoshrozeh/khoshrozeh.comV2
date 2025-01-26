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
  TagIcon,
  FaceSmileIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'About Me', href: '#', icon: FaceSmileIcon, current: false },
  { name: 'Projects', href: '#', icon: CommandLineIcon, current: false },
  { name: 'Blog', href: '#', icon: PencilIcon, current: false },
  { name: 'Resume', href: '#', icon: DocumentIcon, current: false },
  { name: 'Contact/Links', href: '#', icon: EnvelopeIcon, current: false },
  { name: 'Tags', href: '#', icon: TagIcon, current: false },
]


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar({children}: {children: React.ReactNode}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
     
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
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
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <Image src="/anthony.jpeg" alt="Profile" width={32} height={32} className="rounded-full" />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <item.icon aria-hidden="true" className="size-6 shrink-0" />
                              {item.name}
                            </a>
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
            <div className="flex items-center mt-4">
              <Image src="/anthony.jpeg" alt="Profile" width={300} height={100} priority className="rounded-full" />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon aria-hidden="true" className="size-6 shrink-0" />
                          {item.name}
                        </a>
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
          <a href="#">
            <span className="sr-only">Your profile</span>
            <Image src="/anthony.jpeg" alt="Profile" width={32} height={32} priority className="rounded-full" />
             
          </a>
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-12 sm:px-6 lg:px-16">{children}</div>
        </main>
      </div>
    </>
  )
}
