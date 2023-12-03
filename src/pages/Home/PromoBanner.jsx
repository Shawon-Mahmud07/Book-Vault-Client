import { Link } from "react-router-dom";
import bookPic from "../../assets/img/awardbooks.png";
import useAos from "../../hooks/useAos";
const PromoBanner = () => {
  useAos();
  return (
    <>
      <div className="bg-teal-50">
        <div className="w-11/12 lg:w-10/12 mx-auto mt-16 py-8 lg:py-10  ">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
            <div data-aos="fade-right" className="md:w-1/2">
              <h2 className="text-xl text-center lg:text-left lg:text-4xl font-cinzel font-bold mb-6 leading-snug">
                2023 National Book Awards for Fiction Shortlist
              </h2>
              <Link to="/" className="block text-center lg:text-left">
                <button
                  className="bg-[#FF7F56] text-white font-semibold
px-5 py-2 rounded hover:bg-[#96452a] transition-all duration-300"
                >
                  Get Promo Code
                </button>
              </Link>
            </div>
            <div data-aos="fade-left">
              <img src={bookPic} alt="" className="w-96" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PromoBanner;
