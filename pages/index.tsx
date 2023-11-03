import type { NextPage } from "next";
import { Nav } from "../components/navbar/navbar";
import { Layout } from "../components/navbar/layout";
import { Hero } from "../components/hero";
import { Gallery } from "../components/gallery";
import { Box } from "../components/styles/box";
import { Animation } from "../components/animation";
import { Statistics } from "../components/statistics";
import { Membership } from "../components/membership";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
//import { BmiContext } from "../components/bmi";
//import { Testimonials } from "../components/tesminonials";
// import { Features1 } from "../components/features1";
// import { Features2 } from "../components/features2";
//import { Construstion } from "../components/construstion";

const Home: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Box as="main">
        <Hero />
        {/* <Construstion /> */}
        {/* <Features1 /> */}
        {/* <Features2 /> */}
        {/* <Testimonials /> */}
        {/* <BmiContext /> */}
        <Gallery />
        <Animation />
        <Statistics />
        <Membership />
        <Contact />
        <Footer />
      </Box>
    </Layout>
  );
};

export default Home;
