import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useMediaQuery, useTheme } from '@mui/material';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./SwiperStyles.css";

const Imgs = ["images/banner", "images/banner", "images/banner"];

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >

      {Imgs.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={isMobile ? `${item}2.svg`: `${item}1.svg`} alt="banner" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
