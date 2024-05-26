

const AboutUs = () => {
  return (
    <div className="container mx-auto my-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Learn more about our company, our mission, and the dedicated team behind our success.
        </p>
      </div>

      {/* Company Overview Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Company Overview</h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          At Power Solutions, we specialize in providing top-notch power inverters to meet all your energy needs. 
          Our products are designed to offer reliable and efficient power solutions for homes, businesses, and 
          recreational vehicles. With a focus on innovation and customer satisfaction, we strive to deliver 
          high-quality products that exceed expectations.
        </p>
      </div>

      {/* Mission and Vision Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission and Vision</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to provide innovative power solutions that enhance the quality of life for our customers. 
              We are committed to delivering reliable and efficient products that meet the highest standards of quality and performance.
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to be a global leader in the power inverter industry, known for our commitment to excellence, 
              sustainability, and customer satisfaction. We aim to create a sustainable future through innovative energy solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={member.image} alt={member.name} className="rounded-full w-32 h-32 object-cover" />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.position}</p>
                <p className="mt-4">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO',
    description: 'John leads our team with over 20 years of experience in the energy sector.',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBvcnRyYWl0fGVufDB8fHx8MTY0Njg3MTQ4MA&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'CTO',
    description: 'Jane is the brain behind our innovative technology solutions.',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBvcnRyYWl0fGVufDB8fHx8MTY0Njg3MTQ4MA&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    position: 'COO',
    description: 'Michael ensures that our operations run smoothly and efficiently.',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBvcnRyYWl0fGVufDB8fHx8MTY0Njg3MTQ4MA&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 4,
    name: 'Emily Davis',
    position: 'CFO',
    description: 'Emily manages our financial health with expertise and precision.',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBvcnRyYWl0fGVufDB8fHx8MTY0Njg3MTQ4MA&ixlib=rb-1.2.1&q=80&w=400',
  },
];

export default AboutUs;
