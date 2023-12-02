import { Helmet } from "react-helmet-async";
import NavBar from "./NavBar";
import Banner from "./Banner";
import FavoriteBooks from "./FavoriteBooks";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Book-Vault | Home</title>
      </Helmet>
      <NavBar></NavBar>
      <Banner></Banner>
      <FavoriteBooks></FavoriteBooks>
    </div>
  );
};

export default Home;
