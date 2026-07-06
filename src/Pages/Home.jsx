import BlogSection from "../Components/Common/Blogcards/BlogSection"
import Footer from "../Components/Common/Footer/Footer"
import Header from "../Components/Common/Header/Header"
import Category from "../Components/Home/CategorySection/Category"
import EditorialSection from "../Components/Home/EditorialSection/Editorial"
import FeaturedProducts from "../Components/Home/FeaturedProductsSection/FeaturedProducts"
import Hero from "../Components/Home/HeroSection/Hero"
import PromoSection from "../Components/Home/Promosection/Promo"
import WhyChooseUs from "../Components/Home/WhyChooseUsSection/WhyChooseUs"


const Home = () => {
    return (
        <>
            <Hero/>
            <EditorialSection />
            <PromoSection/>
            <FeaturedProducts />
            <WhyChooseUs/>
            <Category/>
            <BlogSection/>
            
        </>
    )
}

export default Home