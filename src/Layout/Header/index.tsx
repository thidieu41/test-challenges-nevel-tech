import { Stack } from "@mui/material";

import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

const Header = () => {
  return (
    <Stack>
      <HeaderDesktop />      
      <HeaderMobile />
    </Stack>
  );
};

export default Header;
