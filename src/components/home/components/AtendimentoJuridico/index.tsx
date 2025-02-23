import { IoLogoWhatsapp } from "react-icons/io5";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { GiConversation } from "react-icons/gi";
import { MdOutlineQuickreply } from "react-icons/md";
import Link from "next/link";

export default function AtendimentoJuridico() {
  const whatsappFirst = "https://api.whatsapp.com/send/?phone=554198083760";

  const links = [
    { href: whatsappFirst, icon: MdOutlineQuickreply, text: "Acesso Simples" },
    { href: whatsappFirst, icon: GiConversation, text: "Atendimento Ágil" },
    { href: whatsappFirst, icon: LiaMoneyCheckAltSolid, text: "Transparência" },
    { href: whatsappFirst, icon: IoLogoWhatsapp, text: "Contato Direto" },
  ];

  return (
    <>
      <div>
        <h3 className="text-3xl font-extrabold text-center text-lightApricotSalmon uppercase">
          Atendimento Jurídico Exclusivo, Soluções Personalizadas
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-6 ">
        {links.map(({ href, icon: Icon, text }, index) => (
          <Link
            key={`${href}-${index}`}
            href={href}
            target="_blank"
            rel="noopener nofollow"
            className="flex-grow min-w-[200px] w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 hover:scale-105 transition-transform"
          >
            <div className="text-center p-6 bg-midBlack shadow-lg w-full rounded-md">
              <Icon
                className={`m-auto size-24 ${
                  text === "Contato Direto"
                    ? "fill-success"
                    : "fill-lightApricotSalmon"
                }`}
              />
              <h2 className="text-2xl font-semibold mt-6">{text}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
