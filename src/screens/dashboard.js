import { Grid, Typography } from "@mui/material";
import FolderList from "./components/avatarlist";
import BasicCard from "./components/cards";
import BasicList from "./components/lists";
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NumCards from "./components/numberscards";

function Dashboard() {
    return <>

        <Grid container sx={{ height: "100vh" }}>

            <Grid md={4} sm={4} lg={3} sx={{ backgroundColor: "black", padding: "1%" }}>
                <BasicList />


            </Grid>
            <Grid md={8} sm={8} lg={9} sx={{ backgroundColor: "#f4f7fa", padding: "2%" }}>

                <Typography variant="h4">Dashboard</Typography>
                <Grid container sx={{ paddingBottom: "1%" }}>
                    <Grid md={4} sm={4} lg={4}><BasicCard percent={50} salesPeriod={"Daily Sales"} dollars={250.98} /></Grid>
                    <Grid md={4} sm={4} lg={4}><BasicCard percent={36} salesPeriod={"Weekly Sales"} dollars={800.88} /></Grid>
                    <Grid md={4} sm={4} lg={4}><BasicCard percent={70} salesPeriod={"Monthly Sales"} dollars={2000.99} /></Grid>
                </Grid>

                <Grid container display={"flex"} justifyContent="space-around">
                    <Grid md={8} sm={8} lg={8} sx={{ backgroundColor: "white" }}>

                        <Typography variant="h5" sx={{ padding: "1.5%", borderLeft: "2px #1E90FF solid" }}>Recent Users</Typography>
                        <FolderList personName={"Alex Suprun"} avatarImgLink={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"} />
                        <FolderList personName={"Julian Wan"} avatarImgLink={"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"} />
                        <FolderList personName={"Nicolas Horn"} avatarImgLink={"https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"} />
                        <FolderList personName={"Leio McLaren"} avatarImgLink={"https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"} />

                    </Grid>

                    <Grid md={3} sm={3} lg={3} sx={{ backgroundColor: "white", border: "3px solid lightblue", padding: "3%" }}>
                        <NumCards totalNumbers={"235"} subTotal={"Total Ideas"} icons={<TipsAndUpdatesOutlinedIcon />} />
                        <NumCards totalNumbers={"26"} subTotal={"Total Locations"} icons={<LocationOnIcon />} />
                        <NumCards totalNumbers={"235"} subTotal={"Total Ideas"} icons={<TipsAndUpdatesOutlinedIcon />} />
                        <NumCards totalNumbers={"26"} subTotal={"Total Locations"} icons={<LocationOnIcon />} />


                    </Grid>

                </Grid>


            </Grid>



        </Grid>


    </>
}

export default Dashboard;