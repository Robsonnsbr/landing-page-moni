import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { getLink } from "@utils/getLinks";

const linkInstagram = await getLink("instagram");
const linkLinkedIn = await getLink("linkedin");
const linkWhatsappSecondary = await getLink("whatsappSecondary");

function IconsFooter() {
  return (
    <ul className="grid grid-cols-4 gap-4">
      <Link href={linkInstagram} target="_blank" rel="noopener noreferrer">
        <li className="class-link-icon">
          <FiInstagram className="size-5" />
        </li>
      </Link>
      <Link href={linkLinkedIn} target="_blank" rel="noopener noreferrer">
        <li className="class-link-icon">
          <FaLinkedinIn className="size-5" />
        </li>
      </Link>
      <Link
        href={linkWhatsappSecondary}
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
