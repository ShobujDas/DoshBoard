import SideNav from "../components/SideNav";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from './../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Box height={30}/>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Users Page</h1>
        </Box>
      </Box>
    </div>
  );
};

export default About;
