import React from "react";
import AboutUsInfoBlock from "@/components/contactAboutUs/aboutusInfoBlock";

export const metadata = {
  title: "About | Sodecx",
  description:
    "About Us: Custom Web Solutions for Online Success. Discover how we specialize in web development, webshops, and hosting services. Trust us to bring your online vision to life with tailored solutions.",
};

const HomePage = async () => {
  return (
    <>
      <AboutUsInfoBlock />
    </>
  );
};

export default HomePage;
