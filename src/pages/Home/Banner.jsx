import bannerImg from "../../assets/img/banner.jpg";
import BannerCard from "../../components/BannerCard";

const Banner = () => {
  const backgroundStyles = {
    backgroundImage: `url(${bannerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div style={backgroundStyles} className=" lg:h-screen ">
        <div className="w-11/12 lg:w-10/12 mx-auto py-10  ">
          <div className="flex w-full  flex-col-reverse lg:flex-row   justify-between items-center  lg:h-screen">
            {/* left side  */}
            <div className="w-full lg:w-6/12 lg:ml-5  text-white ">
              <h2 className="text-xl text-center lg:text-left md:text-4xl  font-bold leading-snug ">
                Buy and Sell Your Books <br />
                <span className="text-[#FF7F56]">for the Best Prices</span>
              </h2>
              <p className="w-full text-center lg:text-left text-sm md:text-lg lg:w-10/12 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur perspiciatis repellat omnis, officia dolore deleniti
                excepturi sapiente error incidunt odit optio? Ipsum nulla
                deserunt quia enim. Corporis labore distinctio alias?
              </p>
            </div>
            {/* right side */}
            <div className="w-full  lg:w-6/12 mb-5 lg:mb-0">
              <BannerCard></BannerCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
