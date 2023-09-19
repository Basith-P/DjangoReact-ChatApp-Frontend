import { createTheme, responsiveFontSizes } from "@mui/material";

export const createAppTheme = () => {
  let theme = createTheme({
    typography: {
      fontFamily: "IBM Plex Sans, sans-serif",
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          elevation: 0,
          position: "sticky",

          sx: {
            backgroundColor: "background.paper",
            color: "text.primary",
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            zIndex: (theme) => theme.zIndex.drawer + 1,
          },
        },
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return theme;
};
