import React from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { BsGlobeAmericas } from "react-icons/bs";

function InfoContact() {
  return (
    <ul className="w-full flex flex-col gap-4 font-openSans text-base text-noBlack">
      <li>
        <div className="flex  items-center justify-start gap-4">
          <div className="w-6">
            <FaWhatsapp className="size-5" />
          </div>
          <span>
            &#40;41&#41; 99808-3760{" "}
            <a
              href="https://api.whatsapp.com/send/?phone=554198083760"
              target={"_blank"}
              rel="noopener noreferrer"
              className="hover:text-lightApricotSalmon active:text-deepIndigoBlue animate-pulse"
            >
              (WhatsApp)
            </a>
          </span>
        </div>
      </li>
      <li>
        <div className="flex  items-center justify-start gap-4">
          <div className="w-6">
            <FaWhatsapp className="size-5" />
          </div>
          <span>
            &#40;41&#41; 99948-3760{" "}
            <a
              href="https://api.whatsapp.com/send/?phone=554199483760"
              target={"_blank"}
              rel="noopener noreferrer"
              className="hover:text-lightApricotSalmon active:text-deepIndigoBlue animate-pulse"
            >
              (WhatsApp)
            </a>
          </span>
        </div>
      </li>
      <li>
        <span className="flex  items-center justify-start gap-4">
          <div className="w-6">
            <MdEmail className="size-5" />
          </div>
          monicharamoccelin.adv@gmail.com
        </span>
      </li>
      <li>
        <span className="flex  items-center justify-start gap-4">
          <div className="w-6">
            <FiInstagram className="size-5" />
          </div>
          https://www.instagram.com/monimoccelin
        </span>
      </li>
      <li>
        <span className="flex  items-center justify-start gap-4">
          <div className="w-6">
            <FaLinkedinIn className="size-5" />
          </div>
          https://www.linkedin.com/in/monichara-moccelin-7675b4194/
        </span>
      </li>
      <li>
        <span className="flex items-center justify-start gap-4 text-justify">
          <div className="w-6">
            <BsGlobeAmericas className="size-5" />
          </div>
          Rua Lysimaco Ferreira da Costa, 29 - Centro Cívico - Curitiba/PR{" "}
          <br />
          CEP: 80530-100
        </span>
      </li>
    </ul>
  );
}

export default InfoContact;
