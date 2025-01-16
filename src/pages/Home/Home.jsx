import HeroSection from "../../components/home/HeroSection";
import AboutSection from "../../components/home/AboutSection";
//import FeatureSection from "../../components/home/FeatureSection";
import BusinessChallenges from "../../components/Home/BusinessChallenges";
import OurMissionVision from "../../components/Home/OurMissionVision";
import OurProduct from "../../components/Home/OurProduct";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <BusinessChallenges />
            <OurMissionVision />
            <OurProduct />
            {/* <FeatureSection /> */}
        </div>
    );
}