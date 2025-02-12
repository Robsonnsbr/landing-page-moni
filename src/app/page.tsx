import SectionContainer from "@components/common/containers/SectionContainer";

import Main from "@components/common/main";
import Footer from "@components/common/footer";
import { Hero } from "@components/home/index";

export default function Home() {
  return (
    <>
      <SectionContainer
        role="banner"
        id="hero-section"
        className="bg-hero-section"
      >
        <Hero />
        <div className="absolute bottom-0 w-full h-10 bg-gradient-to-t from-mediumBlueGray via-mediumBlueGray/80 to-transparent" />
      </SectionContainer>

      <Main>
        <SectionContainer id="insights-section" className="bg-mediumBlueGray">
          Insights
        </SectionContainer>

        <SectionContainer
          id="customer-success-section"
          className="bg-white !min-h-[500px]"
        >
          CustomerSuccess
        </SectionContainer>

        <SectionContainer
          id="form-block-section"
          className="bg-bg-mediumBlueGray"
        >
          FormBlock TickerPartners
        </SectionContainer>

        <SectionContainer id="instructions-section" className="bg-white">
          Instructions
        </SectionContainer>
      </Main>
      <Footer />
    </>
  );
}
