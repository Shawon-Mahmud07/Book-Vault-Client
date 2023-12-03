import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import useAos from "../hooks/useAos";

const BookCards = ({ headline, books }) => {
  useAos();
  return (
    <div className="my-12 px-4  lg:px-24">
      <h2 className="text-3xl lg:text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>
      {/* cards */}
      <div data-aos="zoom-in" className="mt-0 lg:mt-10  ">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {books.map((book, index) => (
            <SwiperSlide key={index}>
              <Link>
                <div>
                  <img src={book.imageURL} alt="" />
                </div>
                <div className="mb-5">
                  <h3 className="text-sm lg:text-xl font-semibold font-serif  ">
                    {book.bookTitle}
                  </h3>
                  <p className="text-xs lg:text-base font-semibold font-cinzel ">
                    {book.authorName}
                  </p>
                  <p className="text-xs lg:text-base font-semibold font-cinzel ">
                    $10.00
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
BookCards.propTypes = {
  headline: PropTypes.string,
  books: PropTypes.array,
};
export default BookCards;
