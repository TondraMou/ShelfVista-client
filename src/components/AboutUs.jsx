import image1 from '../assets/Img1.jpg';
import image2 from '../assets/Img2.jpg';



const AboutUs = () => {
    return (
        <section className="pb-16 px-6 w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="flex flex-col space-y-4">
           
            <div className="hidden md:flex space-x-4">
              <img
                src={image1}
                alt="Customer Service"
                className="w-1/2 h-64 rounded-lg object-cover"
              />
              <img
                src={image2}
                alt="Team Collaboration"
                className="w-1/2 h-64 rounded-lg object-cover"
              />
            </div>
            
            <div className="flex justify-center">
              <img
                src={image1}
                alt="Support Team"
                className="md:w-3/4 w-full h-64 rounded-lg object-cover"
              />
            </div>
          </div>
  
          
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-lg font-semibold uppercase text-blue-400">
              About Us
            </h3>
            <h2 className="text-4xl font-bold leading-tight">
            Empowering Libraries with Seamless Management Solutions
            </h2>
            <p className="text-lg">
            Streamlining Book Tracking, Borrowing, and Management to Enhance Efficiency, Accessibility, and User Experience for Libraries of All Sizes.
            </p>
            <a
              href="/about"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow-lg"
            >
              More About Us
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  