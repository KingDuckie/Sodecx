import React from "react";
import QuoteForm from "@/components/GetaQuote/QuoteForm";

export const metadata = {
  title: "Quote | Sodecx",
  description:
    "Sodecx: Your Partner for Custom Web Solutions. We specialize in web development, webshops, and hosting services to help businesses thrive online. Get in touch for personalized solutions tailored to your needs.",
};

const HomePage = async () => {
  return (
    <>
      <QuoteForm />
    </>
  );
};

export default HomePage;
