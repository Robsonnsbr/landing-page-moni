import ContentContainer from "@components/common/containers/ContentContainer";
import { IoLogoWhatsapp } from "react-icons/io5";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { GiConversation } from "react-icons/gi";
import { MdOutlineQuickreply } from "react-icons/md";
import Link from "next/link";

export default function AtendimentoJuridico() {
  const links = [
    { href: "/acesso", icon: MdOutlineQuickreply, text: "Acesso Simples" },
    { href: "/whatsapp", icon: GiConversation, text: "Atendimento Ágil" },
    { href: "/contato", icon: IoLogoWhatsapp, text: "Contato Direto" },
    {
      href: "/transparencia",
      icon: LiaMoneyCheckAltSolid,
      text: "Transparência",
    },
  ];

  return (
    <ContentContainer className="flex flex-col  overflow-hidden 3xl:scale-105 gap-6">
      <div>
        <h3 className="text-3xl font-extrabold text-center text-lightApricotSalmon uppercase">
          Atendimento Jurídico Exclusivo, Soluções Personalizadas
        </h3>
      </div>
      <div className="flex flex-wrap text-white">
        {links.map(({ href, icon: Icon, text }) => (
          <Link
            key={href}
            href={href}
            className="flex w-full lg:w-1/2 xl:w-1/4 p-4"
          >
            <div className="text-center p-6 bg-midBlack shadow-lg w-full rounded-md">
              <Icon className="m-auto size-16 fill-success" />
              <h2 className="text-2xl font-semibold mt-6">{text}</h2>
            </div>
          </Link>
        ))}
      </div>
    </ContentContainer>
  );
}
