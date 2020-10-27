import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const DarkTheme = createMuiTheme({
  palette: {
      type:"dark",
    primary: {
      main: '#333',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#212121',
    },
  },
});

export default DarkTheme;