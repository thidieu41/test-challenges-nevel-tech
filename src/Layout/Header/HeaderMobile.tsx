import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonStyled } from "../../components/styledComp";
import { listMenu } from "./HeaderDesktop";

const HeaderMobile = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelectedMenu] = useState(listMenu[0].value);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  const menuItems = ["Home", "About", "Services", "Contact"];

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: {
          xs: "flex",
          sm: "none",
        },
      }}
    >
      {/* Top AppBar */}
      <AppBar
        position="static"
        style={{
          zIndex: 9990,
          backgroundColor: "#131415",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "space-around",
              alignItems: "center",
            }}
            direction={"row"}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(!open)}
              sx={{ color: "#FFFFFFCC" }}
            >
              {open ? (
                <CloseIcon
                  sx={{
                    fontSize: 30,
                  }}
                />
              ) : (
                <MenuIcon
                  sx={{
                    fontSize: 30,
                  }}
                />
              )}
            </IconButton>
            <img
              src="images/Logo.svg"
              alt="logo"
              style={{
                width: 71,
                height: 36,
              }}
            />
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
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        hideBackdrop={true}
        PaperProps={{
          sx: {
            height: "100vh",
            width: "100vw",
            top: 50,
            overflowX: "hidden",
            display: "flex",
            backgroundColor:'#1F2023',
            alignItems:'center'
          },
        }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{
            mt:2
          }}
        >
          <List>
            {listMenu.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: selected === item.value ? "#383A42" : "none",
                  color: selected === item.value ? "#FFC700" : "white",
                  borderRadius:'100px',
                  paddingLeft:20,
                  paddingRight:20,
                  mt:3,
                }}
              >
                <ListItemText
                  primary={item.title}
                  sx={{
                    textAlign: "center",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default HeaderMobile;
