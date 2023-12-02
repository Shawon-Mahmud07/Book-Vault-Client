import { Helmet } from "react-helmet-async";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Book-Vault | Home</title>
      </Helmet>
      <NavBar></NavBar>
    </div>
  );
};

export default Home;
