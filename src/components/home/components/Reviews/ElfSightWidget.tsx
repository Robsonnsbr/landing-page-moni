"use client";
import Script from "next/script";

const ElfSightWidget = () => {
  return (
    <>
      <Script src="https://static.elfsight.com/platform/platform.js" async />
      <div
        className="elfsight-app-e5a0fcd2-90e3-4de8-88a4-4f3e24eb900b font-poppins py-10 sm:py-20"
        data-elfsight-app-lazy
      />
    </>
  );
};

export default ElfSightWidget;
