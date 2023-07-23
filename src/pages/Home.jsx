import SideNav from "../components/SideNav";
import AccordionDash from "../components/AccordionDash";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import "../Demo.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Home = () => {
  return (
    <div>
      <div className="bgcolor">
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradient">
                  <CardContent>
                    <div className="storeIcons">
                      <CreditCardIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                      $500.00
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "#ccd1d1" }}
                    >
                      WithDraw
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradientLight">
                  <CardContent>
                    <div className="storeIcons">
                      <ShoppingBagIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                      $900.00
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "#ccd1d1" }}
                    >
                      Total Earning
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ maxWidth: 345 }} className="gradientLight">
                  <Stack spacing={2} direction="row">
                    <div className="storeIcons">
                      <StorefrontIcon />
                    </div>
                    <div className="paddingAll" >
                      <span className="pricetitle" >$250k</span>
                      <br />
                      <span className="priceSubTitle">Total Income</span>
                    </div>
                  </Stack>
                </Card>
                <Card sx={{ maxWidth: 345 }} >
                  <Stack spacing={2} direction="row">
                    <div className="storeIconsBlack">
                      <StorefrontIcon />
                    </div>
                    <div className="paddingAll">
                      <span className="pricetitle">$250k</span>
                      <br />
                      <span className="priceSubTitle">Total Income</span>
                    </div>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={30} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <AccordionDash/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </div>
      
    </div>
  );
};

export default Home;
