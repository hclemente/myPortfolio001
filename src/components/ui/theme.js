import { createMuiTheme } from '@material-ui/core/styles';

const primaryColor = "#8bb182";
// const primaryColor = "#4e6876";
// const secondaryColor = "#e2d1a6";
const secondaryColor = "#FFFFFF";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${primaryColor}`,
      orange: `${secondaryColor}`
    },
    primary: {
      main: `${primaryColor}`,
    },
    secondary: {
      main: `${secondaryColor}`
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
  }
});