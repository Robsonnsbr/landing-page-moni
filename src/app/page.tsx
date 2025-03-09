import SectionContainer from "@components/common/containers/SectionContainer";

import Main from "@components/common/main";
import Footer from "@components/common/footer";
import {
  Hero,
  AtendimentoJuridico,
  Especialidades,
  About,
  Reviews,
} from "@components/home/index";
import ContentContainer from "@components/common/containers/ContentContainer";
import Info from "@components/home/components/info";

export default function Home() {
  return (
    <>
      <Info />
      <SectionContainer
        role="banner"
        id="hero-section"
        className="bg-hero-section bg-cover bg-center pt-20 md:pt-10"
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
        <SectionContainer id="atendimento-section" className="bg-LightGray ">
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
          id="review-section"
          className="bg-LightGray min-h-fit"
        >
          <ContentContainer className="py-16 flex-col items-center gap-6">
            <Reviews />
          </ContentContainer>
        </SectionContainer>
        <hr className="border-2 w-full border-lightApricotSalmon" />
      </Main>
      <Footer />
    </>
  );
}
