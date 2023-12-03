import { Swiper, SwiperSlide } from "swiper/react";
import slideImg from "../assets/img/book1.jpg";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
const BannerCard = () => {
  return (
    <div className="w-full md:w-8/12  lg:w-6/12 mx-auto">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper  "
      >
        <SwiperSlide>
          <img
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1330384299l/11420997.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1270352123l/186074.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1654215925l/61215351._SY475_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1428234219l/25300956.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442889632l/10803121._SY475_.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCard;
