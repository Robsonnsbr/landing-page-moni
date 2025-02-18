import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function IconsFooter() {
  return (
    <ul className="grid grid-cols-4 gap-4">
      <Link
        href="https://www.instagram.com/monimoccelin?igsh=MWFsbXN1cjh6aWsydw=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className="class-link-icon">
          <FiInstagram className="size-5" />
        </li>
      </Link>
      <Link
        href="https://www.linkedin.com/in/monichara-moccelin-7675b4194/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className="class-link-icon">
          <FaLinkedinIn className="size-5" />
        </li>
      </Link>
      <Link
        href="https://api.whatsapp.com/send/?phone=554198083760"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className="class-link-icon">
          <FaWhatsapp className="size-5" />
        </li>
      </Link>
    </ul>
  );
}

export default IconsFooter;
