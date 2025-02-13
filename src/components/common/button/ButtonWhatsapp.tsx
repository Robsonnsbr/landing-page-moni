"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getLink } from "src/utils/getLinks";

function ButtonWhatsapp({ label }: { label: string }) {
  const [linkWhatsappSecondary, setLinkWhatsappSecondary] = useState("#");

  useEffect(() => {
    getLink("whatsappSecondary").then(setLinkWhatsappSecondary);
  }, []);

  return (
    <Link
      href={linkWhatsappSecondary}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-2 justify-center w-64 h-fit bg-success rounded-full shadow-lg cursor-pointer opacity-90 hover:opacity-100 transition"
    >
      <span className="text-white font-semibold font-poppins text-center text-wrap">
        {label}
      </span>
    </Link>
  );
}

export default ButtonWhatsapp;
