import SectionContainer from "@components/common/containers/SectionContainer";

import Main from "@components/common/main";
import Footer from "@components/common/footer";
import {
  Hero,
  AtendimentoJuridico,
  Especialidades,
} from "@components/home/index";
import ContentContainer from "@components/common/containers/ContentContainer";
import PerfilAdvogada from "@components/home/components/About";
import ElfSightWidget from "@components/home/components/Reviews/ElfSightWidget";

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
          <ContentContainer>
            <AtendimentoJuridico />
          </ContentContainer>
        </SectionContainer>

        <hr className="border-2 w-full border-lightApricotSalmon" />
        <SectionContainer id="customer-success-section" className="bg-white ">
          <ContentContainer>
            <Especialidades />
          </ContentContainer>
        </SectionContainer>
        <hr className="border-2 w-full border-lightApricotSalmon" />

        <SectionContainer id="form-block-section" className="bg-deepIndigoBlue">
          <ContentContainer>
            <div className="flex w-full h-full">
              <PerfilAdvogada />
            </div>
          </ContentContainer>
        </SectionContainer>
        <hr className="border-2 w-full border-lightApricotSalmon" />

        <SectionContainer id="instructions-section" className="bg-white">
          <ContentContainer>
            <ElfSightWidget />
          </ContentContainer>
        </SectionContainer>
        <hr className="border-2 w-full border-lightApricotSalmon" />
      </Main>
      <Footer />
    </>
  );
}
