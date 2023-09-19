import {
  AppBar,
  Drawer,
  IconButton,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";

const PrimaryAppBar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (isSmallScreen && showDrawer) setShowDrawer(false);
  }, [isSmallScreen]);

  const toggleDrawer = () => setShowDrawer(!showDrawer);

  return (
    <>
      <AppBar>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ display: { xs: "flex", sm: "none" }, mr: 1 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Drawer anchor="left" open={showDrawer}></Drawer>

          <Link href="/" underline="none" color="inherit">
            <Typography
              variant="h5"
              noWrap
              component="h1"
              sx={{ display: { fontWeight: 700 } }}
            >
              DJR CHAT
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default PrimaryAppBar;
