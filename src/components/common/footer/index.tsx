import ContentContainer from "@components/common/containers/ContentContainer";
import Logo from "@components/common/Logo";
import Image from "next/image";
import moniInstagram from "@public/images/moni-instagram.png";
import Link from "next/link";
import LinkIconsFooter from "./components/LinkIconsFooter";
import SectionContainer from "@components/common/containers/SectionContainer";

const Footer = () => {
  return (
    <SectionContainer className="!min-h-fit bg-deepIndigoBlue text-whiteSnow">
      <ContentContainer
        className="overflow-visible my-10"
        id="container-top-footer"
      >
        <ul className="w-full flex flex-col gap-10 md:grid grid-cols-3 justify-between">
          <li
            className="flex flex-col gap-4 items-center md:items-start"
            id="content-top-footer-contact"
          >
            <h3 className="text-2xl font-semibold text-white">
              MONICHARA MOCCELIN
              <span className="text-lightApricotSalmon">.</span>
            </h3>
            <div className="md:mb-7">
              <p className="text-lightApricotSalmon font-raleway">
                <strong>Telefone/Whatsapp:</strong>{" "}
                <a
                  className="animate-pulse"
                  href="https://api.whatsapp.com/send/?phone=554198083760"
                >
                  &#40;41&#41; 99808-3760
                </a>
              </p>
              <p className="text-lightApricotSalmon font-raleway">
                <strong>Telefone/Whatsapp:</strong>{" "}
                <a
                  className="animate-pulse"
                  href="https://api.whatsapp.com/send/?phone=554199483760"
                >
                  &#40;41&#41; 99948-3760
                </a>
              </p>
              <p className="text-lightApricotSalmon font-raleway">
                <strong>E-mail:</strong>
                <a
                  className="animate-pulse"
                  href="mailto:monicharamoccelin.adv@gmail.com"
                >
                  {" "}
                  monicharamoccelin.adv@gmail.com
                </a>
              </p>
            </div>
            <LinkIconsFooter />
          </li>
          <li className="flex items-center justify-center">
            <Logo />
          </li>

          <li
            className="flex flex-col gap-4 items-center md:items-end"
            id="content-top-footer-contact"
          >
            <h3 className="text-2xl font-semibold text-white md:text-end">
              ATENDIMENTO
              <span className="text-lightApricotSalmon">.</span>
            </h3>
            <div className="flex flex-col md:items-end">
              <p className="text-lightApricotSalmon font-raleway">
                <strong>Horário de Atendimento:</strong>
              </p>
              <p className="text-lightApricotSalmon font-raleway">
                <strong>Segunda a Sexta:</strong>{" "}
                <span className="text-xl">09:00 - 18:00</span>
              </p>
              <p className="text-lightApricotSalmon font-raleway">
                <strong>Sábado:</strong> Fechado
              </p>
              <p className="text-lightApricotSalmon font-raleway">
                <strong>Domingo:</strong> Fechado
              </p>
              <div className="flex flex-row max-w-60 self-center md:self-end mt-4 md:mt-0 rounded-md border-2 opacity-80 border-lightApricotSalmon hover:scale-105 hover:opacity-100 active:scale-100">
                <Link
                  href="https://www.instagram.com/monimoccelin?igsh=MWFsbXN1cjh6aWsydw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Image
                    src={moniInstagram}
                    width={300}
                    placeholder="blur"
                    className="w-[240px] h-auto"
                    loading="lazy"
                    alt="imagem-monichara-linkedIn"
                  />
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </ContentContainer>
      <hr className="border-1 w-full border-lightApricotSalmon" />
      <ContentContainer id="container-bottom-footer">
        <p className="text-center  text-white w-full h-full text-xs py-4">
          ©Copyright <strong>Monichara Moccelin</strong>. Todos direitos
          reservados.
        </p>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Footer;
