import { Link } from "react-router-dom";
import ErrorImg from "../assets/img/404Error.jpg";

const ErrorPage = () => {
  return (
    <div className="h-screen text-center py-36 md:py-0 text-3xl space-y-3">
      <div className="flex flex-col justify-center items-center">
        <img className="w-11/12 md:w-5/12" src={ErrorImg} alt="error-img" />
        <p className="mb-2 text-2xl md:text-4xl font-serif">Page Not Found.</p>
        <Link to="/">
          <button className="bg-[#65B3A2]  rounded-md mt-2 px-2 pb-1 hover:bg-[#84b9ad] hover:text-white duration-1000 font-serif">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
