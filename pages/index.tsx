import type { NextPage } from "next";
import { Nav } from "../components/navbar/navbar";
import { Layout } from "../components/navbar/layout";
import { Hero } from "../components/hero";
import { Gallery } from "../components/gallery";
import { Box } from "../components/styles/box";
import { Animation } from "../components/animation";
// import { Features1 } from "../components/features1";
// import { Features2 } from "../components/features2";
import { Testimonials } from "../components/tesminonials";
import { Statistics } from "../components/statistics";
import { Membership } from "../components/membership";
import { BmiContext } from "../components/bmi";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Construstion } from "../components/construstion";

const Home: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Box as="main">
        {/* <Construstion /> */}
        <Hero />
        <Gallery />
        <Animation />
        {/* <Features1 /> */}
        {/* <Features2 /> */}
        {/* <Testimonials /> */}
        <Statistics />
        <Membership />
        {/* <BmiContext /> */}
        <Contact />
        <Footer />
      </Box>
    </Layout>
  );
};

export default Home;
