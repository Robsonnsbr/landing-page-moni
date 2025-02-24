"use client";

import Script from "next/script";

// Componente Google Ads
const GoogleAds: React.FC = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16892245591"
        async
      />
      <Script
        strategy="afterInteractive"
        id="google-ads-script"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16892245591');
        `,
        }}
      />
    </>
  );
};

export default GoogleAds;
