import HeroSection from "../../components/home/HeroSection";
import AboutSection from "../../components/home/AboutSection";
import BusinessChallenges from "../../components/Home/BusinessChallenges";
import OurMissionVision from "../../components/Home/OurMissionVision";
import OurProduct from "../../components/Home/OurProduct";
import OurServices from "../../components/Home/OurServices";


export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <BusinessChallenges />
            <OurMissionVision />
            <OurServices />
            <OurProduct />
            
            {/* <FeatureSection /> */}
        </div>
    );
}