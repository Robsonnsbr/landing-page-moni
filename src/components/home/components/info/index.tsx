import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhoneCallback } from "react-icons/md";

function Info() {
  return (
    <div className="bg-deepIndigoBlue h-fit p-3 w-full flex justify-center">
      <ul className="flex flex-wrap items-center gap-4 text-lightApricotSalmon text-base font-openSans text-center md:text-left">
        <li className="w-full md:w-auto">Atendimento rápido e online:</li>

        <li className="flex flex-wrap justify-center md:justify-start items-center gap-3">
          <a href="tel:+5541998083760" className="flex items-center gap-2">
            <MdOutlinePhoneCallback className="text-size-6" />
            <span>Ligar</span>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5541998083760"
            className="flex items-center gap-2"
          >
            <FaWhatsapp className="text-size-6" />
            <span>WhatsApp</span>
          </a>
          <span className="block md:inline">(41) 99808-3760</span>
        </li>

        <li className="flex flex-wrap justify-center md:justify-start items-center gap-3">
          <a href="tel:+55419999483760" className="flex items-center gap-2">
            <MdOutlinePhoneCallback className="text-size-6" />
            <span>Ligar</span>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=55419999483760"
            className="flex items-center gap-2"
          >
            <FaWhatsapp className="text-size-6" />
            <span>WhatsApp</span>
          </a>
          <span className="block md:inline">(41) 99948-3760</span>
        </li>
      </ul>
    </div>
  );
}

export default Info;
