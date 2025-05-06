import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";

export const TitleStyled = styled(Typography)({
  color: "#FFC700 !important",
  fontWeight: "900 !important",
  fontSize: "32px !important",
  textTransform: "uppercase",
  fontStyle: "italic",
  "@media (max-width: 768px)": {
    fontSize: "24px !important",
  },

  "@media (max-width: 425px)": {
    fontSize: "16px !important",
  },
});

export const ContainerStyled = styled(Box)({
  paddingLeft: 240,
  paddingRight: 240,
  marginTop: 80,
  marginBottom: 80,

  "@media (max-width: 1024px)": {
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 20,
    marginBottom: 20,
  },

  "@media (max-width: 768px)": {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    marginBottom: 20,
  },
});

export const ServicesStyled = styled(ContainerStyled)({
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#1F2023",
  display: "flex",
});

export const TitleFooterStyled = styled(Typography)({
  fontWeight: "900 !important",
  fontSize: "18px",
  marginBottom: "16px !important",
  textTransform: "uppercase",
  
});

export const SubTitleStyled = styled(Typography)({
  color: "#D2D2D2",
  fontSize: "14px",
  "@media (max-width: 425px)": {
    fontSize: "12px !important",
  },
});

export const ButtonStyled = styled(Button)({
  width: 114,
  height: 40,
  fontStyle: "italic",

  "@media (max-width: 768px)": {
    width: 90,
    height: 36,
    fontSize:'16px !importance'
  },
});

export const ImgStyled  = styled('img') ({
  width: 50,
  height: 42,
  "@media (max-width: 375px)": {
    width: 27,
    height: 28,
  },
})

export const ImgCollectionStyled  = styled('img') ({
  width: 180,
  height: 245,
  "@media (max-width: 425px)": {
    width: 102,
    height: 140,
  },
})