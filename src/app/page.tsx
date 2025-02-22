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
            <h3 className="text-xl text-deepIndigoBlue font-semibold text-center">
              Para mais informações, acesse:{" "}
              <a
                href="http://moccelinadvocacia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightApricotSalmon hover:underline"
              >
                moccelinadvocacia.com
              </a>
            </h3>
          </ContentContainer>
        </SectionContainer>
        <hr className="border-2 w-full border-lightApricotSalmon" />
      </Main>
      <Footer />
    </>
  );
}
