import Banner from "../components/home/Banner";
import ContactUs from "../components/home/ContactUs";
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
    </>
  );
};

export default Home;
