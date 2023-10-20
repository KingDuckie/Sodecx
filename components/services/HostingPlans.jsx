"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

function HostingPlan() {
  const t = useTranslations("Index");
  return (
    <div className="pt-16">
      <div className="w-full bg-white dark:bg-gray-900 py-12">
        <div className="container mx-auto">
          <div className="w-4/5 mx-auto mb-12">
            <h1 className="xl:text-4xl text-3xl text-center dark:text-white text-gray-800 mb-4 font-extrabold">
              {t("sehp1")}
            </h1>
            <p className="text-xl text-center text-gray-600 font-normal">
              {t("sehp2")}
            </p>
          </div>
          <div className="w-11/12 mx-auto">
            <div className="xl:flex lg:flex items-end">
              <div className="flex flex-wrap xl:w-1/4  items-center justify-center pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-2 sm:mb-2 mb-2 shadow bg-transparent">
                <Image
                  src="/calculator-img.webp"
                  alt="calculator"
                  width={158}
                  height={120}
                  loading="eager"
                />
              </div>
              <div className="xl:flex lg:flex md:flex sm:flex shadow">
                <div className="bg-white pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 pl-6 pr-6 flex flex-col xl:w-1/3 lg:w-1/3 justify-center items-center  dark:dark:bg-[#818CF8] rounded-tl-lg">
                  <div className="mb-6">
                    <Image
                      src="/paper-plane.webp"
                      alt="paperPlane"
                      width={35}
                      height={35}
                      loading="eager"
                    />
                  </div>
                  <p className="text-center text-2xl font-bold text-gray-800 mb-3 dark:text-white">
                    {t("sehp3")}
                  </p>
                  <p className="text-center text-sm text-gray-600 mb-6 font-normal w-full dark:text-white">
                    {t("sehp4")}
                  </p>
                  <Link
                    href="/hosting"
                    className="focus:outline-none bg-white transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-purple-700 text-purple-700 px-6 py-2 text-sm"
                  >
                    {t("sehp5")}
                  </Link>
                </div>
                <div className="bg-white pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 pl-6 pr-6 flex flex-col xl:w-1/3 lg:w-1/3 justify-center items-center  dark:dark:bg-[#818CF8]">
                  <div className="mb-5">
                    <Image
                      src="/plane.webp"
                      alt="plane"
                      width={39}
                      height={39}
                      loading="eager"
                    />
                  </div>
                  <p className="text-center text-2xl font-bold text-gray-800 mb-3 dark:text-white">
                    {t("sehp6")}
                  </p>
                  <p className="text-center text-sm text-gray-600 mb-6 font-normal w-full dark:text-white">
                    {t("sehp7")}
                  </p>
                  <Link
                    href="/hosting"
                    className="focus:outline-none bg-purple-700 transition duration-150 ease-in-out hover:bg-purple-800 rounded text-white px-6 py-2 text-sm border"
                  >
                    {t("sehp8")}
                  </Link>
                </div>
                <div className="bg-white pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 pl-6 pr-6 flex flex-col xl:w-1/3 lg:w-1/3 justify-center items-center  dark:dark:bg-[#818CF8]">
                  <div className="mb-6">
                    <Image
                      src="/start-button.webp"
                      alt="start-button"
                      width={35}
                      height={35}
                      loading="eager"
                    />
                  </div>
                  <p className="text-center text-2xl font-bold text-gray-800 mb-3 dark:text-white">
                    {t("sehp9")}
                  </p>
                  <p className="text-center text-sm text-gray-600 mb-6 font-normal w-full dark:text-white">
                    {t("sehp10")}
                  </p>
                  <Link
                    href="/hosting"
                    className="focus:outline-none bg-white transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-purple-700 text-purple-700 px-6 py-2 text-sm"
                  >
                    {t("sehp11")}
                  </Link>
                </div>
                <div className="bg-white pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 pl-6 pr-6 flex flex-col xl:w-1/3 lg:w-1/3 justify-center items-center  dark:dark:bg-[#818CF8] rounded-tr-lg">
                  <div className="mb-6">
                    <Image
                      src="/start-button.webp"
                      alt="start-button"
                      width={35}
                      height={35}
                      loading="eager"
                    />
                  </div>
                  <p className="text-center text-2xl font-bold text-gray-800 mb-3 dark:text-white">
                    {t("sehp12")}
                  </p>
                  <p className="text-center text-sm text-gray-600 mb-6 font-normal w-full dark:text-white">
                    {t("sehp13")}
                  </p>
                  <Link
                    href="/hosting"
                    className="focus:outline-none bg-white transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-purple-700 text-purple-700 px-6 py-2 text-sm"
                  >
                    {t("sehp14")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="shadow">
              <div>
                <div className="flex items-center w-full dark:bg-[#818CF8] bg-gray-100 rounded-tl-lg">
                  <p className="pl-4 pt-3 pb-3 font-bold text-sm text-gray-600 w-3/12 ">
                    {t("sehp15")}
                  </p>
                  <p className="w-3/12 text-sm text-center text-gray-800 font-bold lg:hidden">
                    {t("sehp16")}
                  </p>
                  <p className="w-3/12 text-sm text-center text-gray-800 font-bold lg:hidden">
                    {t("sehp17")}
                  </p>
                  <p className="w-3/12 text-sm text-center text-gray-800 font-bold lg:hidden">
                    {t("sehp18")}
                  </p>
                  <p className="w-3/12 text-sm text-center text-gray-800 font-bold lg:hidden">
                    {t("sehp19")}
                  </p>
                </div>
                <table className="sm:table-fixed table-auto w-full bg-white dark:bg-gray-800">
                  <tbody>
                    <tr>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words dark:text-white">
                        {t("sehp20")}
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                        {t("sehp21")}
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                        {t("sehp22")}
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                        {t("sehp23")}
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                        {t("sehp24")}
                      </td>
                    </tr>
                    <tr>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words dark:text-white">
                        {t("sehp25")}
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                        {t("sehp26")}
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                        {t("sehp27")}
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                        {t("sehp28")}
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                        {t("sehp29")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <p className="pl-4 pt-3 pb-3 font-bold text-sm text-gray-600 dark:dark:bg-[#818CF8] bg-gray-100">
                  {t("sehp30")}
                </p>
                <table className="sm:table-fixed table-auto w-full bg-white  dark:bg-gray-800 ">
                  <tbody>
                    <tr>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words dark:text-white">
                        {t("sehp31")}
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words dark:text-white">
                        {t("sehp32")}
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                        {t("sehp33")}
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                        {t("sehp34")}
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                        {t("sehp35")}
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                        {t("sehp36")}
                      </td>
                    </tr>
                    <tr>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words dark:text-white">
                        {t("sehp37")}
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words dark:text-white">
                        {t("sehp38")}
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                    </tr>

                    <tr>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words dark:text-white">
                        {t("sehp39")}
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words dark:text-white">
                        {t("sehp40")}
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words dark:text-white">
                        {t("sehp41")}
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white"></td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white"></td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words dark:text-white">
                        {t("sehp42")}
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800"></td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                      <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                        <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostingPlan;
