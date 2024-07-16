import Headers from "@/utils/Head";
import Hero from "@/utils/Hero";
import Features from "@/utils/Features";
import FeaturesBlocks from "@/utils/FeaturesBlock";
import Testimonials from "@/utils/Testimonials";
import Newsletter from "@/utils/Newsletters";
import Footer from "@/utils/Footer";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <Headers />
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />
      {/* Features Blocks Section */}
      <FeaturesBlocks />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Newsletter Section */}
      <Newsletter />
      {/* Footer Section */}
      <Footer />
    </>
  );
}
