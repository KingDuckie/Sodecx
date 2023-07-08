"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useTranslations } from "next-intl";
import "react-toastify/dist/ReactToastify.css";

var v = require("validator");
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    var inputconvertedName = v.escape(name);
    var inputconvertedEmail = v.escape(email);
    var inputconvertedPhone = v.escape(phone);
    var inputconvertedMessage = v.escape(message);

    let data = {
      inputconvertedName,
      inputconvertedEmail,
      inputconvertedPhone,
      inputconvertedMessage,
    };
    document.getElementById("contactForm").reset();
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        toast.success("message send");
        setSubmitted(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }
    });
  };
  const t = useTranslations("Index");
  return (
    <>
      <div className="bg-white dark:bg-gray-900 bg-[url(/pigmentBackground1.webp)] bg-no-repeat bg-center bg-cover">
        <div className="grid max-w-screen-xl px-80  mx-auto"></div>

        <div className="container mx-auto pt-48 pb-40">
          <div className="lg:flex">
            <div className="xl:w-2/5 lg:w-2/5 bg-purple-700 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
              <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">
                  {t("cocf1")}
                </h1>
                <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">
                  {t("cocf2")}
                </p>
                <div className="flex pb-4 items-center">
                  <div aria-label="phone icon" role="img">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round" alt="phone">
                      <path stroke="none" d="M0 0h24v24H0z"/>
                      <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1"/>
                      <path d="M15 7a2 2 0 0 1 2 2"/>
                      <path d="M15 3a6 6 0 0 1 6 6"/>
                    </svg>
                  </div>
                  <p className="pl-4 text-white text-base">{t("cocf3")}</p>
                </div>
                <div className="flex items-center">
                  <div aria-label="email icon" role="img">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round" alt="email">
                      <path stroke="none" d="M0 0h24v24H0z"/>
                      <rect x="3" y="5" width="18" height="14" rx="2"/>
                      <polyline points="3 7 12 13 21 7"/>
                    </svg>
                  </div>
                  <p className="pl-4 text-white text-base">{t("cocf4")}</p>
                </div>
              </div>
            </div>
            <div className="xl:w-3/5 lg:w-3/5 bg-white dark:bg-gray-800 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
              <form
                id="contactForm"
                className="bg-white dark:bg-gray-800 py-4 px-8 rounded-tr rounded-br"
              >
                <h1 className="text-4xl text-gray-800 dark:text-white font-extrabold mb-6">
                  {t("cocf5")}
                </h1>
                <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                  <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                    <div className="flex flex-col">
                      <label
                        htmlFor="full_name"
                        className="text-gray-800 dark:text-white text-sm font-semibold leading-tight tracking-normal mb-2"
                      >
                        {t("cocf6")}
                      </label>
                      <input
                        required
                        id="full_name"
                        name="full_name"
                        type="text"
                        className="dark:bg-gray-900 dark:text-white dark:border-gray-700 focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                        placeholder={t("cocf7")}
                        aria-label="enter your full name input"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-2/4 max-w-xs xl:flex xl:justify-start">
                    <div className="flex flex-col">
                      <label
                        htmlFor="email"
                        className="text-gray-800 dark:text-white text-sm font-semibold leading-tight tracking-normal mb-2"
                      >
                        {t("cocf8")}
                      </label>
                      <input
                        required
                        id="email"
                        name="email"
                        type="email"
                        className="dark:bg-gray-900 dark:text-white dark:border-gray-700 focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                        placeholder={t("cocf9")}
                        aria-label="enter your email input"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-wrap">
                  <div className="w-2/4 max-w-xs">
                    <div className="flex flex-col">
                      <label
                        htmlFor="phone"
                        className="text-gray-800 dark:text-white text-sm font-semibold leading-tight tracking-normal mb-2"
                      >
                        {t("cocf10")}
                      </label>
                      <input
                        required
                        id="phone"
                        name="phone"
                        type="tel"
                        className="dark:bg-gray-900 dark:text-white dark:border-gray-700 focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                        placeholder={t("cocf11")}
                        aria-label="enter your phone number input"
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full mt-6">
                  <div className="flex flex-col">
                    <label
                      className="text-sm font-semibold text-gray-800 dark:text-white mb-2"
                      htmlFor="message"
                    >
                      {t("cocf12")}
                    </label>
                    <textarea
                      placeholder=""
                      name="message"
                      className="dark:bg-gray-900 dark:text-white dark:border-gray-700 border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700"
                      rows="8"
                      id="message"
                      aria-label="enter your message input"
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6 focus:border-4 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    {t("cocf13")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactForm;
