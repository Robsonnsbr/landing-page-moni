"use client";
import { useState } from "react";
import Script from "next/script";

const ElfSightWidget = ({ className }: { className?: string }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <p>Carregando...</p>}
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        async
        onLoad={() => setLoading(false)}
      />
      {!loading && (
        <div
          className={`elfsight-app-e5a0fcd2-90e3-4de8-88a4-4f3e24eb900b font-poppins ${className}`}
          data-elfsight-app-lazy
        />
      )}
    </>
  );
};

export default ElfSightWidget;
