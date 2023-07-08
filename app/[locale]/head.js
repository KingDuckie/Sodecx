// import about from "./about/about_structured_data";
// function about_data() {return about};
// import career from "./career/career_structured_data";
// function career_data() {return career};
// import contact from "./contact/contact_structured_data";
// function contact_data() {return contact};
// import hosting from "./hosting/hosting_structured_data";
// function hosting_data() {return hosting};
// import legal from "./legal/legal_structured_data";
// function legal_data() {return legal};
// import quote from "./quote/quote_structured_data";
// function quote_data() {return quote};
// import services from "./services/services_structured_data";
// function services_data() {return services};
// import __PAGE__ from "./page_structured_data";
// function __PAGE___data() {return __PAGE__};

import Script from "next/script";

export default function Head({PAGE}) {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta charSet="UTF-8" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="white"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#111827"
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={     { __html: `{
      "@context": "https://schema.org/",
      "@type": "Organization",
      "name": "Sodecx",
      "url": "https://www.sodecx.com",
      "logo": "https://www.sodecx.com/logo.webp",
      "sameAs" : [
        "https://www.instagram.com/sodecx.official/",
        "https://www.facebook.com/profile.php?id=100090177834428",
        "https://twitter.com/sodecx_official",
        "https://www.youtube.com/channel/UCHWdeYIyuj1IGHMwU4YwS7g",
        "https://www.linkedin.com/company/sodecx?trk=public_profile_topcard-current-company"
      ]
      "description": "Sodecx: Empowering Online Success with Custom Web Solutions. We specialize in web development, webshops, and hosting services to help businesses thrive in the digital landscape.",
    }`}}
        key="product-jsonld"
      />
      <meta
        name="keywords"
        content="website, webdesign, hosting, webshop, sodecx"
      />
      <meta name="author" content="Sodecx" />
      
      <link rel="icon" href="/logo.webp" alt="Sodecx logo" />

      <link rel="apple-touch-icon" href="icons/apple-icon-180.png" />

      <meta name="apple-mobile-web-app-capable" content="yes" />

      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-2048-2732.webp" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-2732-2048.webp" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-1668-2388.webp" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-2388-1668.webp" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-1536-2048.webp" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-2048-1536.webp" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-1668-2224.webp" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-2224-1668.webp" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-1620-2160.webp" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-2160-1620.webp" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-1290-2796.webp" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-2796-1290.webp" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-1179-2556.webp" media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-2556-1179.webp" media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-1284-2778.webp" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-2778-1284.webp" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-750-1334.webp" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-1334-750.webp" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-640-1136.webp" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="public/icons/apple-splash-1136-640.webp" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />

      <link rel="manifest" href="/manifest.json" />
    </>
  );
}
