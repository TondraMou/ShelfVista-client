import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import Typewriter from "react-typewriter-effect"; 
import bannerImg1 from "../assets/bookshelf.jpg";
import bannerImg2 from "../assets/reading.jpg";
import bannerImg3 from "../assets/educational.jpg";

const BannerSlider = () => {
  const slides = [
    {
      title: "Explore a World of Knowledge",
      description: "Dive into our vast collection of books across various genres.",
      image: bannerImg1,
    },
    {
      title: "Read. Learn. Grow.",
      description: "Discover books that inspire and help you grow every day.",
      image: bannerImg2,
    },
    {
      title: "Your Next Adventure Awaits",
      description: "Find the perfect book for your next adventure.",
      image: bannerImg3,
    },
  ];

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={2000}
    >
      {slides.map((slide, index) => (
        <div key={index} className="relative w-11/12 mx-auto h-72 lg:h-96">
          <div className="flex flex-col lg:flex-row w-full h-full">
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start p-4">
              <h2 className="text-2xl font-bold text-[#4E6BFF] mb-2">
                <Typewriter
                  text={slide.title} 
                  cursorColor="#4E6BFF" 
                  typingDelay={100} 
                  eraseDelay={3000}
                  eraseSpeed={100} 
                  typingSpeed={100} 
                />
              </h2>
              <p>{slide.description}</p>
            </div>
            <div className="lg:w-1/2">
              <motion.img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.8, x: "-100%" }}
                animate={{ opacity: 1, scale: 0.9, x: 0 }}
                transition={{ duration: 1.5 }}
              />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default BannerSlider;