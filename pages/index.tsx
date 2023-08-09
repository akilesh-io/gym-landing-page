import type { NextPage } from "next";
import { Nav } from "../components/navbar/navbar";
import { Layout } from "../components/navbar/layout";
import { Hero } from "../components/hero";
import { Gallery } from "../components/gallery";
import { Box } from "../components/styles/box";
import { Features1 } from "../components/features1";
import { Features2 } from "../components/features2";
import { Features3 } from "../components/features3";
import { Testimonials } from "../components/tesminonials";
import { Statistics } from "../components/statistics";
import { Membership } from "../components/membership";
import { Faq } from "../components/faq";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Construstion } from "../components/construstion";

const Home: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Box as="main">
        <Hero />
        <Gallery />
        {/* <Features1 /> */}
        {/* <Features2 /> */}
        <Features3 />
        {/* <Testimonials /> */}
        <Statistics />
        <Membership />
        {/* <Faq /> */}
        <Contact />
        <Footer />
        {/* <Construstion /> */}
      </Box>
    </Layout>
  );
};

export default Home;
