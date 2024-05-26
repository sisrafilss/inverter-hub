/* eslint-disable react/prop-types */

const blogs = [
  {
    title: "How to Improve Your Coding Skills",
    date: "May 20, 2024",
    excerpt:
      "Enhance your coding abilities by practicing daily, working on projects, and engaging with the coding community...",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNvZGluZ3xlbnwwfHx8fDE2NTk5ODc4NzA&ixlib=rb-1.2.1&q=80&w=400",
    link: "/blog/improve-coding-skills",
  },
  {
    title: "Top 10 Web Development Frameworks",
    date: "April 15, 2024",
    excerpt:
      "Discover the top web development frameworks that can help streamline your development process and improve code quality...",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de71a74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fHx8MTY1OTk4Nzg4MQ&ixlib=rb-1.2.1&q=80&w=400",
    link: "/blog/top-web-frameworks",
  },
  {
    title: "Understanding Asynchronous JavaScript",
    date: "March 30, 2024",
    excerpt:
      "Learn the fundamentals of asynchronous JavaScript and how it can help you write more efficient and manageable code...",
    image:
      "https://images.unsplash.com/photo-1553484771-0c953d459061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFzeW5jaHJvbm91cyUyMGphdmFzY3JpcHR8ZW58MHx8fHwxNjU5OTg3OTM5&ixlib=rb-1.2.1&q=80&w=400",
    link: "/blog/understanding-async-js",
  },
];

const BlogCard = ({ blog }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md mx-2 mb-6">
    <img
      src={blog.image}
      alt={blog.title}
      className="w-full h-48 rounded-lg mb-4 object-cover"
    />
    <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
    <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
    <p className="mb-4">{blog.excerpt}</p>
    <a href={blog.link} className="text-blue-500 hover:underline">
      See More
    </a>
  </div>
);

const BlogSection = () => {
  return (
    <section className="text-center py-16 px-4 bg-white">
      <h2 className="text-4xl font-bold mb-4">Latest from Our Blog</h2>
      <p className="text-lg text-gray-600 mb-12">
        Stay updated with the latest news and articles
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
