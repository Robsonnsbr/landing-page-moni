"use client";
import { useState } from "react";
import Script from "next/script";

const TaggBoxWidget = ({ className }: { className?: string }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <p className="animate-pulse">Carregando Avaliações...</p>}
      <Script
        src="https://widget.taggbox.com/embed-lite.min.js"
        async
        onLoad={() => setLoading(false)}
      />
      <div
        className={`taggbox w-full h-full font-poppins ${className}`}
        data-widget-id="2154917"
        data-tags="false"
      />
    </>
  );
};

export default TaggBoxWidget;
