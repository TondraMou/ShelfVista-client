import image1 from '../assets/team.jpg';

const AboutUs = () => {
  return (
    <section className="pb-16 px-6 w-11/12 mx-auto max-w-7xl">
      
      <div className="text-center mb-12">
        <h3 className="text-xl font-semibold uppercase text-[#4E6BFF]">About Us</h3>
        <h2 className="text-lg text-gray-700 leading-tight mt-2">
          Empowering Libraries with Seamless Management Solutions
        </h2>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className="flex justify-center">
          <img
            src={image1}
            alt="Library System"
            className="w-full md:w-4/5 h-80 rounded-lg object-cover shadow-lg"
          />
        </div>

        
        <div className="space-y-6 text-center md:text-left">
          <p className="text-2xl text-gray-700">
            Streamlining book tracking, borrowing, and management to enhance efficiency,
            accessibility, and user experience for libraries of all sizes.
          </p>
          <a
            href="/about"
            className="inline-block bg-[#4E6BFF] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg"
          >
            More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
  