import BannerSlider from "../components/BannerSlider";
import Categories from "../components/Categories";
import LatestBooks from "../components/LatestBooks";


const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <Categories></Categories>
            <LatestBooks></LatestBooks>
        </div>
    );
};

export default Home;