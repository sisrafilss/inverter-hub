import Banner from "../components/home/Banner";
import ContactUs from "../components/home/ContactUs";
import NewsletterSection from "../components/home/NewsLetter";
import Testimonial from "../components/home/Testimonial";
import BlogSection from "../components/home/TopBlogs";
import TopProducts from "../components/home/TopProducts";

const Home = () => {
  return (
    <>
      <Banner />
      <TopProducts />
      <Testimonial />
      <BlogSection />
      <ContactUs />
      <NewsletterSection />
    </>
  );
};

export default Home;
