import React from 'react'
import HeroSection from "../Components/HeroSection";
import ImproveSkills from "../Components/ImproveSkills";
import QuoteSection from "../Components/QuoteSection";
// import ChiefSection from "../Components/ChiefSection";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <ImproveSkills/>
            <QuoteSection/>
            {/* <ChiefSection/> */}
        </div>
    )
}

export default Home
