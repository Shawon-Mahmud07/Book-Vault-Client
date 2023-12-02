import { Helmet } from "react-helmet-async";
import NavBar from "./NavBar";
import Banner from "./Banner";
import FavoriteBooks from "./FavoriteBooks";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Book-Vault | Home</title>
      </Helmet>
      <NavBar></NavBar>
      <Banner></Banner>
      <FavoriteBooks></FavoriteBooks>
      <FavBook></FavBook>
      <PromoBanner></PromoBanner>
    </div>
  );
};

export default Home;
