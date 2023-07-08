import React from "react";
import ContactForm from "@/components/contactAboutUs/contactform";

export const metadata = {
  title: "Contact | Sodecx",
  description:
    "Sodecx, Contact Us: Get in Touch for Custom Web Solutions. Reach out to us for personalized website and webshop development, hosting services, and expert support. Let's discuss how we can help you achieve your online goals.",
};

const HomePage = async () => {
  return (
    <>
      <ContactForm />
    </>
  );
};

export default HomePage;
