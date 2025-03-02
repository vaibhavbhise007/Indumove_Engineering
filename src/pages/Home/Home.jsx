import HeroSection from "../../components/Home/HeroSection";
import AboutSection from "../../components/Home/AboutSection";
import BusinessChallenges from "../../components/Home/BusinessChallenges";
import OurMissionVision from "../../components/Home/OurMissionVision";
import OurProduct from "../../components/Home/OurProduct";
import OurServices from "../../components/Home/OurServices";
import Contact from "../../components/Home/Contact";
import OurClient from "../../components/Home/OurClient";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <BusinessChallenges />
            <OurMissionVision />
            <OurServices />
            <OurProduct />
            <OurClient />
            <Contact />
            {/* <FeatureSection /> */}
        </div>
    );
}