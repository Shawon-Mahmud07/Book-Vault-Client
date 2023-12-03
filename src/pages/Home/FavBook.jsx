import FavBookImg from "../../assets/img/favoritebook.jpg";
import useAos from "../../hooks/useAos";
const FavBook = () => {
  useAos();
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto lg:my-20  ">
      <div className="flex flex-col lg:flex-row  justify-between items-center">
        <div data-aos="fade-down-right" className="md:w-1/2">
          <img
            src={FavBookImg}
            alt=""
            className="rounded md:w-10/12 lg:mx-0  mx-auto"
          />
        </div>
        <div
          data-aos="fade-down-left"
          className="lg:w-1/2 w-full  text-center   space-y-6"
        >
          <h2 className="text-2xl lg:text-4xl font-bold my-5 lg:w-3/4 leading-snug">
            Find Your Favorite{" "}
            <span className="text-[#FF7F56]">Book Here!</span>
          </h2>
          <p className="mb-10 text-sm font-medium font-Inter lg:text:xl lg:text-left lg:w-5/6">
            "Explore our diverse collection and find your next literary
            favorite! From gripping novels to timeless classics, discover a
            world of stories waiting for you.Your next literary escape awaits –
            dive into the joy of reading with us!" Start your reading adventure
            here."
          </p>
          {/* stats */}
          <div className="flex flex-col md:flex-row justify-between bg-gray-100 lg:bg-white    gap-6 lg:w-3/4 my-14">
            <div className=" w-full lg:w-auto text-center lg:text-left">
              <h3 className="text-3xl font-bold ">800+</h3>
              <p className="text-base font-serif">Book Listing</p>
            </div>
            <div className=" w-full lg:w-auto text-center lg:text-left">
              <h3 className="text-3xl font-bold ">550+</h3>
              <p className="text-base font-serif">Register Users</p>
            </div>
            <div className=" w-full lg:w-auto text-center lg:text-left">
              <h3 className="text-3xl font-bold ">1200+</h3>
              <p className="text-base font-serif">PDF Downloads</p>
            </div>
          </div>
          <div className="mt-12 lg:text-left text-center">
            <button className="bg-[#FF7F56]  text-white font-semibold px-5 py-2 rounded hover:bg-[#b84e2e] transition-all duration-300">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FavBook;
