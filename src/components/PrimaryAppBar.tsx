import { AppBar, Link, Toolbar, Typography } from "@mui/material";

const PrimaryAppBar = () => {
  return (
    <>
      <AppBar>
        <Toolbar variant="dense">
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
