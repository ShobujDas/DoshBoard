import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Settings = () => {
  return (
    <div>
      <Navbar/>
      <Box height={30}/>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h2>Products Page</h2>
        </Box>
      </Box>
    </div>
  );
};

export default Settings;
