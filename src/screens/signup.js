import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Inputs from "./components/inputs";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Signup() {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    return <>
        <Box sx={{ backgroundColor: "black", paddingY: "5%" }}>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid md={6} sm={10} lg={5}>
                    <Box sx={{ backgroundColor: "white", padding: "18px", paddingY: "5%", border: "10px solid #3598dc" }}>
                        <Typography sx={{ color: "#3898dc", paddingY: "3%" }} variant="h3">Sign Up</Typography>
                        <Typography variant="p">Please fill the form to create an account</Typography>
                        <hr />
                        <Box>
                            <Grid container>
                                <Grid md={6} sm={12} xs={12} lg={6}>
                                    <Inputs size={true} labels={"First Name"} />
                                </Grid>
                                <Grid md={6} sm={12} xs={12} lg={6}>
                                    <Inputs size={true} labels={"Last Name"} />
                                </Grid>
                            </Grid>
                            <Inputs size={true} labels={"Email"} />
                            <Inputs size={true} labels={"Password"} />
                            <Inputs size={true} labels={"Confirm Password"} />
                        </Box>

                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="I accept the Terms of use & Privacy policy" />
                        </FormGroup>
                        <Button variant="contained"><b>Sign Up</b></Button>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography variant="p" >Already Have an account <Link to="/signin">Login Here</Link></Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>
}

export default Signup;