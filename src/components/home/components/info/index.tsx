import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhoneCallback } from "react-icons/md";

function Info() {
  return (
    <div className="bg-deepIndigoBlue h-fit p-3 w-full flex justify-center">
      <ul className="flex flex-wrap items-center gap-4 text-lightApricotSalmon text-base font-openSans text-center m-auto">
        <li className="w-full md:w-auto">Atendimento rápido e online:</li>

        <li className="flex flex-wrap justify-center  items-center gap-4 m-auto">
          <a
            href="https://api.whatsapp.com/send/?phone=5541998083760"
            className="flex items-center gap-2"
          >
            <FaWhatsapp className="text-xl" />
            <span>WhatsApp</span>
          </a>
        </li>

        <li className="flex flex-wrap justify-center  items-center gap-4 m-auto">
          <a href="tel:41999483760" className="flex items-center gap-2">
            <MdOutlinePhoneCallback className="text-xl" />
            <span>(41) 99948-3760</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Info;
