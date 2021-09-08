import { createTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8B5CF6",
    },
    secondary: {
      main: grey[50],
    },
  },
});

export default theme;
