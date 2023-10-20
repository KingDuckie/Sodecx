"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ThreeStepAlignment = () => {
  const t = useTranslations("Index");
  return (
    <>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="mx-auto container f-f-p px-4 xl:px-0 py-24 ">
          <h1 className="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold dark:text-white lg:leading-9 tracking-wider text-gray-900">
            {t("seta1")}
          </h1>
          <div className="md:mt-24 f-f-p">
            <div className="hidden md:flex justify-center w-full">
              <div className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
                <div aria-label="get a quote" role="img">
                  <Image
                    className="focus:outline-none mt-10"
                    src="/quote-services.webp"
                    alt="get a quote"
                    width={186}
                    height={185}
                    loading="eager"
                  />
                </div>
                <div aria-label="2" role="img">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" alt="second">
                    <circle cx="24" cy="24" r="23.5" transform="rotate(90 24 24)" fill="#F3F4F6" stroke="#818CF8"/>
                    <path d="M18.224 31.248C20.256 29.616 21.848 28.28 23 27.24C24.152 26.184 25.12 25.088 25.904 23.952C26.704 22.8 27.104 21.672 27.104 20.568C27.104 19.528 26.848 18.712 26.336 18.12C25.84 17.512 25.032 17.208 23.912 17.208C22.824 17.208 21.976 17.552 21.368 18.24C20.776 18.912 20.456 19.816 20.408 20.952H18.296C18.36 19.16 18.904 17.776 19.928 16.8C20.952 15.824 22.272 15.336 23.888 15.336C25.536 15.336 26.84 15.792 27.8 16.704C28.776 17.616 29.264 18.872 29.264 20.472C29.264 21.8 28.864 23.096 28.064 24.36C27.28 25.608 26.384 26.712 25.376 27.672C24.368 28.616 23.08 29.72 21.512 30.984H29.768V32.808H18.224V31.248Z" fill="#052E47"/>
                  </svg>
                </div>
                <div className="flex mt-12 flex-col items-center lg:items-end md:w-8/12">
                  <h1 className="focus:outline-none dark:text-white  text-xl font-bold leading-5">
                    {t("seta2")}
                  </h1>
                  <h2 className="focus:outline-none text-gray-500 dark:text-gray-200 mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide">
                    {t("seta3")}{" "}
                  </h2>
                </div>
                <div aria-label="delivery" role="img">
                  <Image
                    className="focus:outline-none mt-24  "
                    src="/delivery-services.webp"
                    alt="delivery"
                    width={186}
                    height={185}
                    loading="eager"
                  />
                </div>
                <Image
                  className="hidden md:block absolute right-0 top-0 -mt-2 -mr-1"
                  src="/line.webp"
                  alt="line"
                  width={3}
                  height={256}
                  loading="eager"
                />
              </div>

              <div className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2">
                <div aria-label="1" role="img">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" alt="First">
                    <circle cx="24" cy="24" r="24" transform="rotate(90 24 24)" fill="#4338CA"/>
                    <path d="M21.912 17.64V15.648H26.424V33H24.216V17.64H21.912Z" fill="#F3F4F6"/>
                  </svg>
                </div>

                <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                  <h1 className="focus:outline-none dark:text-white  text-xl font-bold leading-5">
                    {t("seta4")}
                  </h1>
                  <h2 className="focus:outline-none text-gray-500 dark:text-gray-200 mt-3 text-base leading-6 tracking-wide">
                    {t("seta5")}{" "}
                  </h2>
                </div>
                <div aria-label="collaboration" role="img">
                  <Image
                    className="focus:outline-none mt-32"
                    src="/collab-services.webp"
                    alt="collaboration"
                    width={186}
                    height={185}
                    loading="eager"
                  />
                </div>
                <div aria-label="3" role="img">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" alt="third">
                    <circle cx="24" cy="24" r="23.5" transform="rotate(90 24 24)" fill="#F3F4F6" stroke="#818CF8"/>
                    <path d="M17.44 20.016C17.552 18.544 18.12 17.392 19.144 16.56C20.168 15.728 21.496 15.312 23.128 15.312C24.216 15.312 25.152 15.512 25.936 15.912C26.736 16.296 27.336 16.824 27.736 17.496C28.152 18.168 28.36 18.928 28.36 19.776C28.36 20.768 28.072 21.624 27.496 22.344C26.936 23.064 26.2 23.528 25.288 23.736V23.856C26.328 24.112 27.152 24.616 27.76 25.368C28.368 26.12 28.672 27.104 28.672 28.32C28.672 29.232 28.464 30.056 28.048 30.792C27.632 31.512 27.008 32.08 26.176 32.496C25.344 32.912 24.344 33.12 23.176 33.12C21.48 33.12 20.088 32.68 19 31.8C17.912 30.904 17.304 29.64 17.176 28.008H19.288C19.4 28.968 19.792 29.752 20.464 30.36C21.136 30.968 22.032 31.272 23.152 31.272C24.272 31.272 25.12 30.984 25.696 30.408C26.288 29.816 26.584 29.056 26.584 28.128C26.584 26.928 26.184 26.064 25.384 25.536C24.584 25.008 23.376 24.744 21.76 24.744H21.208V22.92H21.784C23.256 22.904 24.368 22.664 25.12 22.2C25.872 21.72 26.248 20.984 26.248 19.992C26.248 19.144 25.968 18.464 25.408 17.952C24.864 17.44 24.08 17.184 23.056 17.184C22.064 17.184 21.264 17.44 20.656 17.952C20.048 18.464 19.688 19.152 19.576 20.016H17.44Z" fill="#052E47"/>
                  </svg>
                </div>
                <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                  <h1 className="focus:outline-none text-xl dark:text-white font-bold leading-5">
                    {t("seta6")}
                  </h1>
                  <h2 className="focus:outline-none text-gray-500 dark:text-gray-200 mt-3 text-base leading-6 tracking-wide">
                    {t("seta7")}
                  </h2>
                </div>
              </div>
            </div>
            <div className="md:hidden flex flex-col items-center w-full">
              <Image
                className="focus:outline-none my-10"
                src="/quote-services.webp"
                alt="get a quote"
                width={186}
                height={185}
                loading="eager"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" alt="First">
                <circle cx="24" cy="24" r="24" transform="rotate(90 24 24)" fill="#4338CA"/>
                <path d="M21.912 17.64V15.648H26.424V33H24.216V17.64H21.912Z" fill="#F3F4F6"/>
              </svg>
              <div className="mt-10">
                <h1 className="text-xl text-center dark:text-white  tracking-wide leading-5 font-bold">
                  {t("seta4")}
                </h1>
                <h2 className="text-gray-500 dark:text-gray-200 mt-3 text-center text-base leading-6 tracking-wide">
                  {t("seta5")}
                </h2>
              </div>
              <Image
                className="focus:outline-none my-10"
                src="/collab-services.webp"
                alt="collaboration"
                width={186}
                height={185}
                loading="eager"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" alt="second">
                <circle cx="24" cy="24" r="23.5" transform="rotate(90 24 24)" fill="#F3F4F6" stroke="#818CF8"/>
                <path d="M18.224 31.248C20.256 29.616 21.848 28.28 23 27.24C24.152 26.184 25.12 25.088 25.904 23.952C26.704 22.8 27.104 21.672 27.104 20.568C27.104 19.528 26.848 18.712 26.336 18.12C25.84 17.512 25.032 17.208 23.912 17.208C22.824 17.208 21.976 17.552 21.368 18.24C20.776 18.912 20.456 19.816 20.408 20.952H18.296C18.36 19.16 18.904 17.776 19.928 16.8C20.952 15.824 22.272 15.336 23.888 15.336C25.536 15.336 26.84 15.792 27.8 16.704C28.776 17.616 29.264 18.872 29.264 20.472C29.264 21.8 28.864 23.096 28.064 24.36C27.28 25.608 26.384 26.712 25.376 27.672C24.368 28.616 23.08 29.72 21.512 30.984H29.768V32.808H18.224V31.248Z" fill="#052E47"/>
              </svg>
              <div className="mt-10">
                <h1 className="text-xl tracking-wide dark:text-white  text-center leading-5 font-bold">
                  {t("seta2")}
                </h1>
                <h2 className="text-gray-500 dark:text-gray-200 mt-3 pl-3 text-center text-base leading-6 tracking-wide">
                  {t("seta3")}
                </h2>
              </div>
              <Image
                className="focus:outline-none my-10"
                src="/delivery-services.webp"
                alt="delivery services"
                width={186}
                height={185}
                loading="eager"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" alt="third">
                <circle cx="24" cy="24" r="23.5" transform="rotate(90 24 24)" fill="#F3F4F6" stroke="#818CF8"/>
                <path d="M17.44 20.016C17.552 18.544 18.12 17.392 19.144 16.56C20.168 15.728 21.496 15.312 23.128 15.312C24.216 15.312 25.152 15.512 25.936 15.912C26.736 16.296 27.336 16.824 27.736 17.496C28.152 18.168 28.36 18.928 28.36 19.776C28.36 20.768 28.072 21.624 27.496 22.344C26.936 23.064 26.2 23.528 25.288 23.736V23.856C26.328 24.112 27.152 24.616 27.76 25.368C28.368 26.12 28.672 27.104 28.672 28.32C28.672 29.232 28.464 30.056 28.048 30.792C27.632 31.512 27.008 32.08 26.176 32.496C25.344 32.912 24.344 33.12 23.176 33.12C21.48 33.12 20.088 32.68 19 31.8C17.912 30.904 17.304 29.64 17.176 28.008H19.288C19.4 28.968 19.792 29.752 20.464 30.36C21.136 30.968 22.032 31.272 23.152 31.272C24.272 31.272 25.12 30.984 25.696 30.408C26.288 29.816 26.584 29.056 26.584 28.128C26.584 26.928 26.184 26.064 25.384 25.536C24.584 25.008 23.376 24.744 21.76 24.744H21.208V22.92H21.784C23.256 22.904 24.368 22.664 25.12 22.2C25.872 21.72 26.248 20.984 26.248 19.992C26.248 19.144 25.968 18.464 25.408 17.952C24.864 17.44 24.08 17.184 23.056 17.184C22.064 17.184 21.264 17.44 20.656 17.952C20.048 18.464 19.688 19.152 19.576 20.016H17.44Z" fill="#052E47"/>
              </svg>
              <div className="flex mt-10 flex-col items-center md:items-start md:w-8/12">
                <h1 className="text-xl text-center dark:text-white tracking-wide leading-5 font-bold">
                  {t("seta6")}
                </h1>
                <h2 className="text-gray-500 dark:text-gray-200 mt-3 text-center text-base leading-6 tracking-wide">
                  {t("seta7")}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThreeStepAlignment;
