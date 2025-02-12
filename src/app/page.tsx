import SectionContainer from "@components/common/containers/SectionContainer";

import Main from "@components/common/main";
import Footer from "@components/common/footer";
import { Hero } from "@components/home/index";
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
        <hr className="border-4 w-full border-lightApricotSalmon" />
        <SectionContainer id="insights-section" className="bg-deepIndigoBlue">
          <ContentContainer>
            <div className="flex w-full h-full">
              <h1 className="text-white m-auto">SERVICES</h1>
            </div>
          </ContentContainer>
        </SectionContainer>

        <hr className="border-4 w-full border-lightApricotSalmon" />
        <SectionContainer id="customer-success-section" className="bg-white ">
          <ContentContainer>
            <div className="flex w-full h-full">
              <h1 className="text-deepIndigoBlue m-auto">TEAM</h1>
            </div>
          </ContentContainer>
        </SectionContainer>
        <hr className="border-4 w-full border-lightApricotSalmon" />

        <SectionContainer id="form-block-section" className="bg-deepIndigoBlue">
          <ContentContainer>
            <div className="flex w-full h-full">
              <h1 className="text-white m-auto">ABOUT US</h1>
            </div>
          </ContentContainer>
        </SectionContainer>
        <hr className="border-4 w-full border-lightApricotSalmon" />

        <SectionContainer id="instructions-section" className="bg-white">
          <ContentContainer>
            {" "}
            <div className="flex w-full h-full">
              <h1 className="text-deepIndigoBlue m-auto">REVIEWS</h1>
            </div>
          </ContentContainer>
        </SectionContainer>
      </Main>
      <Footer />
    </>
  );
}
