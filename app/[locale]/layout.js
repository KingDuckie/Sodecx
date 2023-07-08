import Header from "@/components/mainpage/Header";
import { GlobalProvider } from "./GlobalProvider";
import "./globals.css";
import Footer from "@/components/mainpage/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/cookiebanner";
import Head from "./head";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "nl" }];
}
export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-GRBY4DV8B2" />
      <Head PAGE={children.props.childProp.segment} />
      <body className="w-100 h-100 mr-0 p-0 overflow-x-hidden dark:bg-gray-900 bg-white">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <GlobalProvider>
            <Header />
            {children}
            <Footer />
            <CookieBanner />
          </GlobalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
