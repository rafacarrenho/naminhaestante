import type { NextPage } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BannerCarousel } from "../components/BannerCarousel";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <BannerCarousel />
      <Footer />
    </>
  );
};

export default Home;
