import { Stack, Typography } from "@mui/material";
import { ImgStyled, ServicesStyled } from "../styledComp";

const listServices = [
  {
    name: "free to earn",
    urlImg: "images/services/LINK1.svg",
  },
  {
    name: "Ranking",
    urlImg: "images/services/Race.svg",
  },
  {
    name: "VIdeo-NFT",
    urlImg: "images/services/Video.svg",
  },
  {
    name: "How to buy",
    urlImg: "images/services/how_to_play.svg",
  },
  {
    name: "New NFTS",
    urlImg: "images/services/New.svg",
  },
  {
    name: "Roadmaps",
    urlImg: "images/services/Roadmaps.svg",
  },
];

const Services = () => {
  return (
    <ServicesStyled
      flexDirection={"row"}
      sx={{
        py: 3,
        m:0,

      }}
    >
      {listServices.map((item, index) => (
        <Stack
          key={index}
          gap={2}
          sx={{
            alignItems: "center",
            justifyContent:'space-between'
          }}
        >
          <ImgStyled
            src={item.urlImg}
            alt="services"
          />
          <Typography
            sx={{
              color: "white",
              textTransform: "uppercase",
              textAlign:'center',
              fontSize: {
                sm:14,
                xs: 9
              },
            }}
          >
            {item.name}
          </Typography>
        </Stack>
      ))}
    </ServicesStyled>
  );
};

export default Services;
