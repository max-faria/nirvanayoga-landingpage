import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#000', // Custom color for the tab indicator
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#000', // Custom color for the selected tab
          }
        }
      }
    }
  }
});

export default theme;