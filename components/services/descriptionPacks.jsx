"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

function DescriptionPack() {
  const t = useTranslations("Index");
  return (
    <>
      <div className="md:mx-auto md:container px-4">
        <div className="pt-10 md:pt-40">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center pb-12">
              <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                <div className="py-2 text-color">
                  <h1 className="text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">
                    {t("sedp1")}
                  </h1>
                  <h2 className="text-lg lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
                    {t("sedp2")}
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <Image
                  className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                  src="/services-sale.webp"
                  alt="picture"
                  width={6444}
                  height={4296}
                  loading="eager"
                />
                <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                  <div className="flex items-center justify-between w-full sm:w-full mb-8">
                    <div className="flex items-center">
                      <div className="p-4 bg-yellow-200 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-discount"
                          width={32}
                          height={32}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1={9} y1={15} x2={15} y2={9} />
                          <circle cx="9.5" cy="9.5" r=".5" />
                          <circle cx="14.5" cy="14.5" r=".5" />
                          <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
                        </svg>
                      </div>
                      <div className="ml-6">
                        <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">
                          {t("sedp3")}
                        </h3>
                        <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">
                          {t("sedp4")}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center pl-3 text-green-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-trending-up"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="3 17 9 11 13 15 21 7" />
                          <polyline points="14 7 21 7 21 14" />
                        </svg>
                        <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">
                          {t("sedp5")}
                        </p>
                      </div>
                      <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">
                        {t("sedp6")}
                      </p>
                    </div>
                  </div>
                  <div className="relative mb-3">
                    <hr className="h-1 rounded-sm bg-gray-200" />
                    <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700" />
                  </div>
                  <h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">
                    {t("sedp7")}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-32 pt-16">
          <div className="mx-auto">
            <div className="flex flex-wrap flex-row-reverse items-center">
              <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                <div className="py-2 text-color">
                  <h1 className="text-2xl lg:text-6xl tracking-tighter md:leading-snug f-f-l font-black">
                    {t("sedp8")}
                  </h1>
                  <h2 className="text-lg lg:text-3xl leading-7 md:leading-10 f-f-r py-8">
                    {t("sedp9")}
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <Image
                  className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                  src="/collab-dev-services.webp"
                  alt="picture2"
                  width={3429}
                  height={5143}
                  loading="eager"
                />
                <div className="relative z-10 p-4 bg-white shadow rounded mx-auto w-9/12 -mb-20">
                  <h4 className="text-gray-800 font-normal text-md leading-4 tracking-normal mb-2">
                    {t("sedp10")}
                  </h4>
                  <p className="text-gray-600 text-xs leading-3 font-normal">
                    {t("sedp11")}
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="text-gray-600">
                      <svg
                        className="feather feather-user"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                    </span>
                    <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">
                      {t("sedp12")}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center">
                    <span className="text-gray-600">
                      <svg
                        className="feather feather-dollar-sign"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1={12} y1={1} x2={12} y2={23} />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </span>
                    <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">
                      {t("sedp13")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DescriptionPack;
