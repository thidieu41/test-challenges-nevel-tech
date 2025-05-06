import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useRef } from "react";
import { btnStyle } from "../Collection";
import { ContainerStyled, TitleStyled } from "../styledComp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const imgList = [
  "images/calendar/calendar1.svg",
  "images/calendar/calendar1.svg",
  "images/calendar/calendar1.svg",
];

const list = [
  {
    title: "HOT NFT",
    url: "images/calendar/hotfix.svg",
  },
  {
    title: "PROMOTION",
    url: "images/calendar/pro.svg",
  },
];
const Calendar = () => {
  const preRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <ContainerStyled>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
            }}
          >
            <TitleStyled>NFT Drops Calendar</TitleStyled>
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
            slidesPerView={1}
            loop
            navigation={{
              prevEl: preRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper: any) => {
              swiper.params.navigation.prevEl = preRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            style={{
              borderRadius: "12px",
            }}
          >
            {imgList.map((item, index) => (
              <SwiperSlide key={index} style={{}}>
                <img src={item} alt="calendar" style={{}} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid
            container
            spacing={5}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {list.map((item, index) => (
              <Grid size={6} key={item.title}>
                <Box>
                  <TitleStyled
                    sx={{
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </TitleStyled>
                  <img
                    src={item.url}
                    alt="calendar"
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </ContainerStyled>
  );
};

export default Calendar;
