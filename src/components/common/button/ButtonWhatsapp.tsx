"use client";
import { useLink } from "@hooks/useLink";
import Link from "next/link";

function ButtonWhatsapp({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const whatsappFirst = useLink("whatsappFirst");

  return (
    <Link
      href={whatsappFirst}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center p-2 justify-center w-64 h-fit bg-success rounded-full shadow-lg cursor-pointer opacity-90 hover:opacity-100 transition ${className}`}
    >
      <span className="text-white font-semibold font-poppins text-center text-wrap">
        {label}
      </span>
    </Link>
  );
}

export default ButtonWhatsapp;
