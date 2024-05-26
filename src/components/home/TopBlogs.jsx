/* eslint-disable react/prop-types */

import BlogCard from "../BlogCard";

const blogs = [
  {
    title: "Choosing the Right Power Inverter for Your Home",
    date: "May 5, 2024",
    excerpt:
      "Learn how to select the best power inverter for your home based on your specific power needs and preferences...",
    image:
      "/images/blogs/blog-1.webp",
    link: "/blog/choosing-right-inverter",
  },
  {
    title: "Benefits of Using Solar Power Inverters",
    date: "April 20, 2024",
    excerpt:
      "Explore the numerous advantages of integrating solar power inverters into your energy system for a sustainable future...",
    image:
    "/images/blogs/blog-2.jpeg",
    link: "/blog/benefits-solar-inverters",
  },
  {
    title: "Top Features to Look for in a Power Inverter",
    date: "March 30, 2024",
    excerpt:
      "Understand the key features to consider when purchasing a power inverter to ensure maximum efficiency and reliability...",
    image:
    "/images/blogs/blog-3.jpeg",
    link: "/blog/features-power-inverters",
  },
  {
    title: "Maintenance Tips for Your Power Inverter",
    date: "February 15, 2024",
    excerpt:
      "Keep your power inverter in top condition with these essential maintenance tips and practices...",
    image:
    "/images/blogs/blog-4.jpeg",
    link: "/blog/maintenance-tips",
  },
  {
    title: "How to Install a Power Inverter in Your RV",
    date: "January 10, 2024",
    excerpt:
      "Step-by-step guide to installing a power inverter in your RV for a seamless travel experience...",
    image:
    "/images/blogs/blog-5.jpg",
    link: "/blog/install-inverter-rv",
  },
  {
    title: "The Future of Power Inverters: Trends and Innovations",
    date: "December 25, 2023",
    excerpt:
      "Discover the latest trends and innovations shaping the future of power inverters and the energy industry...",
    image:
    "/images/blogs/blog-6.gif",
    link: "/blog/future-trends-inverters",
  },
];

const BlogSection = () => {
  return (
    <section className="text-center py-16 px-4 bg-white">
      <h2 className="text-4xl font-bold mb-4">Latest from Our Blog</h2>
      <p className="text-lg text-gray-600 mb-12">
        Stay updated with the latest news and articles
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.slice(0, 3).map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
