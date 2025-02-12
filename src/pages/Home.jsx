import AboutUs from "../components/AboutUs";
import BannerSlider from "../components/BannerSlider";
import Categories from "../components/Categories";
import JoinUsSection from "../components/JoinUsSection";
import LatestBooks from "../components/LatestBooks";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Home - Library Management System</title>
      </Helmet>
            <BannerSlider></BannerSlider>
            <Categories></Categories>
            <LatestBooks></LatestBooks>
            <AboutUs></AboutUs>
            <JoinUsSection></JoinUsSection>
        </div>
    );
};

export default Home;