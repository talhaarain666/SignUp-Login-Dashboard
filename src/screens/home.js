import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

function HomeScreen (){
return(
<>
<Box display={"flex"} justifyContent={"center"}>

<Button color="primary" variant="text" size="large"><Link className="text-Link" to="/signup">Sign Up Page</Link></Button>
<Button color="info" variant="text" size="large"><Link className="text-Link" to="/signin">Sign In Page</Link></Button>
<Button color="primary" variant="text" size="large"><Link className="text-Link" to="/dashboard">Dashboard Page</Link></Button>

</Box>

</>

)
}

export default HomeScreen;