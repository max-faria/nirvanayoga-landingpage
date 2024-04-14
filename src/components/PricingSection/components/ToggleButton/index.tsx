import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import VinyasaPricesCards from "../VinyasaPricesCard";
import AshtangaPricesCard from "../AshtangaPricesCard";
import { ThemeProvider } from "@mui/material";
import theme from "../../../../theme";
import YinPricesCard from "../YinPricesCard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ToggleButtonPrice = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", marginTop: "40px" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Vinyasa Yoga" {...a11yProps(0)} />
            <Tab label="Ashtanga Yoga" {...a11yProps(1)} />
            <Tab label="Yin Yoga" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <VinyasaPricesCards />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <AshtangaPricesCard />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <YinPricesCard/>
        </CustomTabPanel>
      </Box>
    </ThemeProvider>
  );
};

export default ToggleButtonPrice;
