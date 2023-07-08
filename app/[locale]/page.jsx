import React from "react";

import LandingPage from "../../components/mainpage/LandingPage";

export const metadata = {
  title: "Sodecx",
  description:
    "Sodecx: Empowering Online Success with Custom Web Solutions. We specialize in web development, webshops, and hosting services to help businesses thrive in the digital landscape.",
  openGraph: {
    title: "Sodecx",
    description:
    "Sodecx: Empowering Online Success with Custom Web Solutions. We specialize in web development, webshops, and hosting services to help businesses thrive in the digital landscape.",
    url: "https://sodecx.com",
    siteName: "Sodecx",
    local: "en_US",
    type: "website",
    images:[
      {
        url: "https://sodecx.com/logo.webp",
        width: 800,
        height: 600,
        alt: "Sodecx logo",
      },
      {
        url: "https://sodecx.com/logo.webp",
        width: 1800,
        height: 1600,
        alt: "Sodecx logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  }
};

export default function Homepage() {
  return (
    <>
      <LandingPage />
    </>
  );
}
