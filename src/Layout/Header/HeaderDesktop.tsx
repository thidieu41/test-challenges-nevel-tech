import { Button, Stack } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { ButtonStyled } from "../../components/styledComp";

export const listMenu = [
  {
    value: "home",
    title: "HOME",
  },
  {
    value: "items1",
    title: "ITEMS1",
  },
  {
    value: "items2",
    title: "ITEMS2",
  },
  {
    value: "items3",
    title: "ITEMS3",
  },
  {
    value: "items4",
    title: "ITEMS4",
  },
];



const HeaderDesktop = () => {
  const [selectedMenu, setSelectedMenu] = useState(listMenu[0].value);

  return (
    <Stack
      sx={{
        p: "10px 20px",
        justifyContent: "space-between",
        display: {
          xs: "none",
          sm: "flex",
        },
      }}
      direction={"row"}
    >
      <Stack
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
        gap={2}
        direction={"row"}
      >
        <img
          src="images/Logo.svg"
          alt="logo"
          style={{
            width: 71,
            height: 39,
          }}
        />
        {listMenu.map((item, index) => (
          <Button
            key={index}
            sx={{
              color: item.value === selectedMenu ? "#FFC700" : "white",
              backgroundColor: item.value === selectedMenu ? "#383A42" : "none",
              borderRadius: 100,
              fontWeight: 500,
            }}
            variant={item.value === selectedMenu ? "contained" : "text"}
            onClick={() => setSelectedMenu(item.value)}
          >
            {item.title}
          </Button>
        ))}
      </Stack>
      <Stack direction={"row"} gap={2}>
        <ButtonStyled
          variant="contained"
          style={{
            borderRadius: 100,
            fontWeight: 900,
          }}
        >
          SIGN UP
        </ButtonStyled>
        <ButtonStyled
          variant="outlined"
          sx={{
            color: "white",
            borderRadius: 100,
            fontWeight: 900,
          }}
        >
          LOG IN
        </ButtonStyled>
      </Stack>
    </Stack>
  );
};

export default HeaderDesktop;
