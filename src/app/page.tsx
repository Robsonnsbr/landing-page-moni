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
import GoogleCommentsSkeleton from "@components/home/components/Reviews/GoogleCommentsSkeleton";
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
          <ContentContainer className="py-16 flex-col gap-6  items-center">
            <Especialidades />
          </ContentContainer>
        </SectionContainer>

        <hr className="border-2 w-full border-lightApricotSalmon" />
        <SectionContainer id="customer-success-section" className="bg-white ">
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

        <SectionContainer id="instructions-section" className="bg-white">
          <ContentContainer className="flex-col gap-6">
            {/* TODO: entender o pq é lançado um erro no render no componente original, remove condition after fix*/}
            {process.env.NODE_ENV === "production" ? (
              <ElfSightWidget />
            ) : (
              <GoogleCommentsSkeleton />
            )}
          </ContentContainer>
        </SectionContainer>
        <hr className="border-2 w-full border-lightApricotSalmon" />
      </Main>
      <Footer />
    </>
  );
}
