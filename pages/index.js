import "react-loading-skeleton/dist/skeleton.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Components/Header/Header";
import HeroSection from "../Components/Home/HeroSection";
import IntroSection from "../Components/Home/IntroSection";
import CounterSection from "../Components/Home/CounterSection";
import AuthorsSection from "../Components/Home/AuthorsSection";
import NewRelease from "../Components/Home/NewRelease";
import TestimonySection from "../Components/Home/TestimonySection";
import BlogSection from "../Components/Home/BlogSection";
import Footer from "../Components/Footer/Footer";

const index = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <IntroSection />
      <CounterSection />
      <AuthorsSection />
      <NewRelease />
      <TestimonySection />
      <BlogSection />
      <Footer />
    </>
  );
};

export default index;
