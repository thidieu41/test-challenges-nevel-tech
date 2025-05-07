import {  Button, Stack } from "@mui/material";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import {
  ContainerStyled,
  ImgCollectionStyled,
  TitleStyled,
} from "../styledComp";

const Imgs = [
  "images/collection/Rectangle.svg",
  "images/collection/Rectangle2.svg",
  "images/collection/Rectangle3.svg",
  "images/collection/Rectangle4.svg",
  "images/collection/Rectangle5.svg",
  "images/collection/Rectangle6.svg",
];

export const btnStyle = () => ({
  background: "#383A42",
  color: "white",
  border: "none",
  borderRadius: 12,
  minWidth: 40,
  height: 40,
  cursor: "pointer",
});

const NewCollection = () => {
  const preRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <ContainerStyled>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <TitleStyled>New NFT Collections</TitleStyled>

        <Stack
          direction={"row"}
          sx={{
            justifyContent: "end",
            alignItems: "center",
          }}
          gap={1}
        >
          <Button ref={preRef} style={btnStyle()}>
            ‹
          </Button>
          <Button ref={nextRef} style={btnStyle()}>
            ›
          </Button>
        </Stack>
      </Stack>

      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={3}
        loop
        navigation={{
          prevEl: preRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = preRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 5,
          },
        }}
      >
        {Imgs.map((item, index) => (
          <SwiperSlide key={index}>
            <ImgCollectionStyled
              src={item}
              alt="collection"
              style={{
                borderRadius: 12,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </ContainerStyled>
  );
};

export default NewCollection;
