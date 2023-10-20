"use client";
import Link from "next-intl/link";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next-intl/client";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  const t = useTranslations("Index");
  return (
    <>
      <header className="fixed w-full z-50">
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.webp"
                className="h-9 mr-3 md:h-12 w-full lg:h-20"
                alt="Sodecx Logo"
                rel="preload"
                width={60}
                height={80}
                loading="eager"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Sodecx
              </span>
            </Link>

            <div className="flex items-center lg:order-2">
              <Link
                href="/contact"
                className="hidden xsm:flex text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
              >
                {t("olhe1")}
              </Link>

              <div className="flex justify-center ml-16">
                {renderThemeChanger()}
              </div>

              <Link
                href={pathname}
                locale="en"
                className="mr-5 ml-5 hidden md:block"
              >
                <Image
                  src="/icon-english.webp"
                  alt="englishFlag"
                  className="h-10 w-full"
                  rel="preload"
                  width={40}
                  height={40}
                  loading="eager"
                />
              </Link>
              <Link href={pathname} locale="nl" className="hidden md:block">
                <Image 
                  src="/icon-dutch.webp" 
                  alt="dutchFlag" 
                  className="h-10 w-full"
                  rel="preload"
                  width={40}
                  height={40}
                  loading="eager"
                  />
              </Link>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    onClick={() => setIsOpen(!isOpen)}
                    href="/"
                    className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                  >
                    {t("olhe2")}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setIsOpen(!isOpen)}
                    href="/services"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {t("olhe3")}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setIsOpen(!isOpen)}
                    href="/about"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {t("olhe4")}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setIsOpen(!isOpen)}
                    href="/contact"
                    className="block lg:hidden py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {t("olhe5")}
                  </Link>
                </li>
                <li>
                  <div className=" flex   ">
                    <Link
                      href={pathname}
                      locale="en"
                      className="grid  lg:hidden w-1/2"
                    >
                      <Image
                        src="/icon-english.webp"
                        alt="englishFlag"
                        className="justify-self-center h-10"
                        rel="preload"
                        width={40}
                        height={40}
                        loading="eager"
                      />
                    </Link>
                    <Link
                      href={pathname}
                      locale="nl"
                      className="grid lg:hidden w-1/2"
                    >
                      <Image
                        src="/icon-dutch.webp"
                        alt="dutchFlag"
                        className="justify-self-center h-10"
                        rel="preload"
                        width={40}
                        height={40}
                        loading="eager"
                      />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
