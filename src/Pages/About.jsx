import AboutHero from "../Components/About/Hero Section/AboutHero"
import HistorySection from "../Components/About/HistorySection/HistorySection"
import ManufactureSection from "../Components/About/Manufacture Section/ManufactureSetion"
import StatsSection from "../Components/About/StatsSection/StatsSection"
import TestimonialSection from "../Components/About/testimonialsSection/testimonialsSection"
import BlogSection from "../Components/Common/Blogcards/BlogSection"
import Footer from "../Components/Common/Footer/Footer"
import Header from "../Components/Common/Header/Header"

const About = () => {
    return (
        <>
            <AboutHero />
            <ManufactureSection/>
            <StatsSection/>
            <HistorySection/>
            <TestimonialSection/>
            <BlogSection/>
        </>
    )
}
export default About