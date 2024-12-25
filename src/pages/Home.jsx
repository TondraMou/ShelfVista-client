import AboutUs from "../components/AboutUs";
import BannerSlider from "../components/BannerSlider";
import Categories from "../components/Categories";
import LatestBooks from "../components/LatestBooks";


const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <Categories></Categories>
            <LatestBooks></LatestBooks>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;