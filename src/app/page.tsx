import Image from "next/image";
import imageMonichara from "@public/images/mochara-imagem.webp";
import SectionContainer from "@components/common/containers/SectionContainer";

import Main from "@components/common/main";
import Footer from "@components/common/footer";
import {
  Hero,
  AtendimentoJuridico,
  Especialidades,
  About,
} from "@components/home/index";
import ContentContainer from "@components/common/containers/ContentContainer";
import TaggBoxWidget from "@components/home/components/Reviews/TaggBoxWidget";

export default function Home() {
  return (
    <>
      <SectionContainer
        role="banner"
        id="hero-section"
        className="bg-hero-section"
      >
        <Hero />
      </SectionContainer>

      <Main>
        <hr className="border-2 w-full border-lightApricotSalmon" />
        <SectionContainer id="insights-section" className="bg-deepIndigoBlue">
          <ContentContainer className="py-16 flex-col gap-6  items-center">
            <Especialidades />
          </ContentContainer>
        </SectionContainer>

        <hr className="border-2 w-full border-lightApricotSalmon" />
        <SectionContainer
          id="customer-success-section"
          className="bg-LightGray "
        >
          <ContentContainer className="py-16 flex-col gap-6  items-center">
            <AtendimentoJuridico />
          </ContentContainer>
        </SectionContainer>
        <hr className="border-2 w-full border-lightApricotSalmon" />

        <SectionContainer id="form-block-section" className="bg-deepIndigoBlue">
          <ContentContainer className="py-16 gap-6 flex-col items-center">
            <About />
          </ContentContainer>
        </SectionContainer>
        <hr className="border-2 w-full border-lightApricotSalmon" />

        <SectionContainer
          id="instructions-section"
          className="bg-LightGray min-h-fit"
        >
          {/* TODO: entender o pq é lançado um erro no render no componente original, remove condition after fix*/}
          <ContentContainer className="py-16 flex-col sm:flex-row items-center gap-6">
            <TaggBoxWidget />
            <Image
              src={imageMonichara}
              placeholder="blur"
              alt="imagem Monichara advocada"
              width={612}
              height={918}
              className="sm:flex-1 max-w-[300px] h-auto rounded-md border-2 border-lightApricotSalmon shadow-md"
            />
          </ContentContainer>
        </SectionContainer>
        <hr className="border-2 w-full border-lightApricotSalmon" />
      </Main>
      <Footer />
    </>
  );
}
