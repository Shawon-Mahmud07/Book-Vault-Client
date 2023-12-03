import bannerImg from "../../assets/img/banner.jpg";
import BannerCard from "../../components/BannerCard";
import useAos from "../../hooks/useAos";

const Banner = () => {
  useAos();
  const backgroundStyles = {
    backgroundImage: `url(${bannerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div style={backgroundStyles} className=" lg:h-screen  ">
        <div>
          <div className="w-11/12 py-10 md:py-12 h-auto lg:h-screen lg:w-10/12 mx-auto    ">
            <div className="flex w-full  flex-col-reverse lg:flex-row    justify-between items-center h-full lg:h-screen">
              {/* left side  */}
              <div data-aos="fade-right" className="w-full lg:w-6/12 lg:ml-5 ">
                <h2 className="text-xl text-center lg:text-left md:text-4xl font-cinzel font-bold leading-snug ">
                  <span className="text-white">Buy and Sell Your Books</span>
                  <br />
                  <span className="text-[#ff8055]">for the Best Prices</span>
                </h2>
                <p className="w-full text-center text-white  lg:text-left text-sm md:text-lg lg:w-10/12 mt-2">
                  Find and read more books you'll love, and keep track of the
                  books you want to read. Be part of the world's largest
                  community of book lovers on Goodreads.
                </p>
              </div>
              {/* right side */}
              <div data-aos="fade-left" className=" w-6/12 mb-5  lg:mb-0">
                <BannerCard></BannerCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
