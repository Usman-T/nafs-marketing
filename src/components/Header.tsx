"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";

import Container from "./Container";
import { siteDetails } from "@/data/siteDetails";
import { menuItems } from "@/data/menuItems";
import Logo from "./Logo";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent">
      <Container className="!px-0">
        <nav className="flex items-center justify-between border-b border-[#3c3836] bg-[#1d2021] px-5 py-3 shadow-md md:bg-transparent md:py-6 md:shadow-none md:border-none">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-6 w-6 text-[#fe8019]" />
            <span className="text-xl font-semibold text-[#ebdbb2]">
              {siteDetails.siteName}
            </span>
          </Link>

          <ul className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-[#a89984] text-sm hover:text-[#fe8019] transition-colors font-medium"
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#cta"
                className="rounded-full bg-[#fe8019] px-6 py-2 text-sm font-semibold text-[#1d2021] hover:bg-[#d65d0e] transition-all"
              >
                Download
              </Link>
            </li>
          </ul>

          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10  rounded-full text-[#a89984] transition-all focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
            ) : (
              <HiBars3 className="h-6 w-6" aria-hidden="true" />
            )}
            <span className="sr-only">Toggle navigation</span>
          </button>
        </nav>
      </Container>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden bg-[#1d2021] border-t border-[#3c3836] shadow-lg">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  onClick={toggleMenu}
                  className="block text-[#a89984] hover:text-[#fe8019] font-medium text-sm transition-colors"
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#cta"
                onClick={toggleMenu}
                className="block w-fit rounded-full bg-[#fe8019] px-5 py-2 text-sm font-semibold text-[#1d2021] hover:bg-[#d65d0e] transition-all"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
