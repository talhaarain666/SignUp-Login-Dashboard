import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Inputs from "./components/inputs";

function Signin() {
    return <>
        <Box sx={{ backgroundColor: "black" }}>
            <Grid container direction="row"
                justifyContent="center"
                alignItems="center" sx={{
                    height: "100vh", textAlign: "center",
                }}>
                <Grid md={8} lg={8} sx={{ backgroundColor: "white", paddingX: "5%", height: "500px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>

                    <Typography sx={{ paddingBottom: "1%" }} variant="h3"><b>Login to Your Account</b></Typography>
                    <Inputs size={true} labels={"Email"}></Inputs>
                    <Inputs size={true} labels={"Password"}></Inputs>
                    <Button sx={{ marginTop: "1%" }} size="large" variant="contained">Sign In</Button>

                </Grid>

                <Grid md={4} lg={4} sx={{ backgroundColor: "#3598dc", color: "white", paddingX: "3%", height: "500px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <Typography variant="h3">New Here?</Typography>
                    <Typography variant="h5" sx={{ padding: "3%" }}>Sign up and discover a great amount of new opportunities!</Typography>
                    <Button color="info" size="large" variant="contained"><Link className="text-Link" to="/signup">Sign Up</Link></Button>
                </Grid>

                <Button color="inherit" size="large" variant="contained"><Link className="text-Link" to="/dashboard">Go to Dashboard</Link></Button>
            </Grid>
        </Box>
    </>
}

export default Signin;