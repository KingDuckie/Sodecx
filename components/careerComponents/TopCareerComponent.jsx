"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
const TopCareerComponent = () => {
  const t = useTranslations("Index");
  return (
    <>
      <div className="h-screen">
        <div className="pt-48 text-center px-auto">
          <h1>{t("catc1")}</h1>
          <h2>{t("catc2")}</h2>
          <button className="focus:outline-none mt-4 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6 focus:border-4 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
            <Link href="/contact" className="hover:underline">
              {t("catc3")}
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default TopCareerComponent;
