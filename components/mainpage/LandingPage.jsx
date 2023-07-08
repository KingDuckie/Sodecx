/* eslint-disable jsx-a11y/alt-text */
"use client";
import FirstInfoBox from "./FirstInfoBox";
import CardShowCase from "./CardShowCase";
import Quote from "./quote";
import HostingShowCase from "./HostingShowcase";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";
import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
const LandingPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const t = useTranslations("Index");
  return (
    <>
      <section className="bg-white dark:bg-gray-900 z-1 hidden md:block">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1
              data-aos="fade-right"
              className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
            >
              Sodecx <br />
            </h1>
            <h2
              data-aos="fade-right"
              className="max-w-2xl mb-4 text-xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-3xl text-red-500 dark:text-white"
            >
              {t("hola1")}
            </h2>
            <p
              data-aos="fade-right"
              data-aos-delay="30"
              data-aos-duration="800"
              className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
            >
              {t("hola2")}
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="hidden lg:mt-0 lg:col-span-5 lg:flex"
          >
            <img 
              src="/landingpage1.webp" 
              alt="hero image"
              rel="preload"
            />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 z-1 md:hidden">
        <div className="grid max-w-screen-xl px-4 pt-32 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <div className=" lg:mt-0 lg:col-span-5 lg:flex">
              <img 
                src="/landingpage1.webp" 
                alt="hero image"
                rel="preload"
              />
            </div>
            <h2 className="max-w-2xl mb-4 text-xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-3xl text-red-500 dark:text-white">
              {t("hola1")}
            </h2>

            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {t("hola2")}
            </p>
          </div>
        </div>
      </section>
      <FirstInfoBox />
      <CardShowCase />
      <HostingShowCase />
      <Quote />
    </>
  );
};

export default LandingPage;
