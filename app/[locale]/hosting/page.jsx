import React from "react";
import QuoteFormHosting from "@/components/GetaQuote/QuoteFormHosting";

export const metadata = {
  title: "Hosting | Sodecx",
  description:
    "Sodecx, Hosting Solutions: Reliable and Secure Hosting Services. Choose our hosting solutions for fast performance, robust infrastructure, and 24/7 technical support. Experience the power of reliable hosting tailored to your website or webshop needs.",
};

const HomePage = async () => {
  return (
    <>
      <QuoteFormHosting />
    </>
  );
};

export default HomePage;
