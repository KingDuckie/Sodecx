"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useTranslations } from "next-intl";
import "react-toastify/dist/ReactToastify.css";

const QuoteFormHosting = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [pack, setPack] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  var v = require("validator");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    var inputconvertedFirstName = v.escape(firstName);
    var inputconvertedLastName = v.escape(lastName);
    var inputconvertedEmail = v.escape(email);
    var inputconvertedBusinessName = v.escape(businessName);
    var inputconvertedMPack = v.escape(pack);
    var inputconvertedDescription = v.escape(description);

    let data = {
      inputconvertedFirstName,
      inputconvertedLastName,
      inputconvertedEmail,
      inputconvertedBusinessName,
      inputconvertedMPack,
      inputconvertedDescription,
    };
    document.getElementById("infoForm").reset();
    fetch("/api/quote", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status == 200) {
        console.log("Response succeeded!");
        toast.success("message send");
        setSubmitted(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setBusinessName("");
        setPack("");
        setDescription("");
      }
    });
  };
  const t = useTranslations("Index");
  return (
    <>
      <div className="container mx-auto pt-48 pb-40 ">
        <div className="block text-center">
          <form
            id="infoForm"
            className="w-full max-w-lg inline-block mx-auto text-left"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  html="grid-first-name"
                >
                  {t("hoqf1")}
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder={t("hoqf2")}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  html="grid-last-name"
                >
                  {t("hoqf3")}
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder={t("hoqf4")}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  html="grid-email"
                >
                  {t("hoqf5")}
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder={t("hoqf6")}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  html="grid-bsname"
                >
                  {t("hoqf7")}
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-bsname"
                  type="text"
                  placeholder={t("hoqf8")}
                  onChange={(e) => {
                    setBusinessName(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  html="grid-state"
                >
                  {t("hoqf9")}
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none "
                    id="grid-state"
                    onChange={(e) => {
                      setPack(e.target.value);
                    }}
                  >
                    <option disabled>{t("hoqf10")}</option>
                    <option value="Hosting-Basic">{t("hoqf11")}</option>
                    <option value="Hosting-Business">{t("hoqf12")} </option>
                    <option value="Hosting-Advanced">{t("hoqf13")}</option>
                    <option value="Hosting-Custom">{t("hoqf14")}</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  html="grid-description"
                >
                  {t("hoqf15")}
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  rows={5}
                  id="grid-description"
                  type="text"
                  placeholder={t("hoqf16")}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
            </div>
            <button
              type="submit"
              id="submitbtn"
              className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6 focus:border-4 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              {t("hoqf17")}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default QuoteFormHosting;
