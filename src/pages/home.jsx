import Navbar from "../components/navbar"
import Carousel from "../components/carousel";
import StripBar from "../components/stripBar";
import HelmetCategories from "../components/helmetCategories";
import HelmetStructure from "../components/helmetStructure";
import Footer from "../components/footer";
import CommunityBanner from "../components/communityBanner";
import TestimonialSlider from "../components/testimonialSlider";

export default function Home() {
    return (
      <>
        <Carousel />
        <StripBar />
        <HelmetCategories />
        <HelmetStructure />
        <StripBar />
        <CommunityBanner />
        <TestimonialSlider />
      </>
    );
}