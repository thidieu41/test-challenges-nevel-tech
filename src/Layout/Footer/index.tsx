import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import {
  ContainerStyled,
  SubTitleStyled,
  TitleFooterStyled,
} from "../../components/styledComp";

const listMenu = [
  {
    title: "About Us",
    chidItem: [
      {
        subTile: "Careers",
        url: "",
      },
      {
        subTile: "Company Details",
        url: "",
      },
      {
        subTile: "Terms & Conditions",
        url: "",
      },
      {
        subTile: "Help center",
        url: "",
      },
      {
        subTile: "Privacy Policy",
        url: "",
      },
      {
        subTile: "Affiliate",
        url: "",
      },
    ],
  },
  {
    title: "Products",
    chidItem: [
      {
        subTile: "NFT Marketplace",
        url: "",
      },
      {
        subTile: "Slingshot",
        url: "",
      },
      {
        subTile: "Swaps",
        url: "",
      },
      {
        subTile: "NFT Launchpad",
        url: "",
      },
      {
        subTile: "Runes Platform",
        url: "",
      },
      {
        subTile: "Creator Dashboard",
        url: "",
      },
    ],
  },
  {
    title: "Resources",
    chidItem: [
      {
        subTile: "Support",
        url: "",
      },
      {
        subTile: "API",
        url: "",
      },
      {
        subTile: "Feature Requests",
        url: "",
      },
      {
        subTile: "Trust & Safety",
        url: "",
      },
      {
        subTile: "Sitemap",
        url: "",
      },
    ],
  },
];
const Footer = () => {
  return (
    <ContainerStyled sx={{
      my:5
    }}>
      <Grid container spacing={2}>
        {listMenu.map((item) => (
          <Grid size={{ xs: 6, md: 3 }} key={item.title}  sx={{
            mt:{
              sm:2,
              md:0
            }
          }}>
            <TitleFooterStyled>{item.title}</TitleFooterStyled>
            <Stack gap={2}>
              {item.chidItem.map((chil) => (
                <Link
                  href={chil.url}
                  underline="none"
                  sx={{
                    color: "#D2D2D2",
                    fontSize:{
                      sm:14,
                      xs:12
                    }
                  }}
                >
                  {chil.subTile}
                </Link>
              ))}
            </Stack>
          </Grid>
        ))}
        <Grid  size={{ xs: 6, md: 3 }} sx={{
            mt:{
              sm:2,
              md:0
            }
          }}>
          <TitleFooterStyled>Contact Us</TitleFooterStyled>
          <Stack gap={2}>
            <SubTitleStyled>support@tech.email</SubTitleStyled>
            <SubTitleStyled>affiliate@tech.com</SubTitleStyled>
            <img src="images/install.svg" alt="install" style={{
              width:151, 
              height:44
            }}/>
          </Stack>
        </Grid>
      </Grid>
    </ContainerStyled>
  );
};

export default Footer;
