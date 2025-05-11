import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Typewriter from "react-typewriter-effect";
import bannerImg1 from "../assets/banner-bg.png";

const BannerSlider = () => {
  const title = "Explore a World of Knowledge";
  const description =
    "Dive into our vast collection of books across various genres.";

  return (
    <div
      className="w-full h-[80vh] bg-cover bg-center relative flex items-center"
      style={{ backgroundImage: `url(${bannerImg1})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative z-10 max-w-5xl px-6 lg:px-16">
        <div className="text-left">
          <h2 className="text-4xl lg:text-5xl text-white font-bold mb-4">
            <Typewriter
              text={title}
              cursorColor="#ffffff"
              typingDelay={100}
              eraseDelay={3000}
              eraseSpeed={100}
              typingSpeed={100}
            />
          </h2>
          <p className="text-lg lg:text-xl text-white mb-6">
            {description}
          </p>
          <div className="flex gap-4 flex-wrap">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/books"
                className="px-6 py-2 bg-[#4E6BFF] text-white font-semibold rounded-full shadow-lg"
              >
                Browse Books
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/help"
                className="px-6 py-2 border-2 bg-orange-600 text-white font-semibold rounded-full shadow-lg"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;