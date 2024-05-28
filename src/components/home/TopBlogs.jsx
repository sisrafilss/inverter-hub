/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import axios from "axios";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/blogs").then((res) => setBlogs(res.data));
  }, []);

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
