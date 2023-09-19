import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material";

import { createAppTheme } from "./app_theme";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  const theme = createAppTheme();
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
