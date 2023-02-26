import { List, ListItemIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
function NumCards(props) {
    return (

        <List sx={{ display: "flex", alignItems: "center", marginY: "5%" }}>

            <Box>
                <ListItemIcon className="li-Icon">{props.icons}</ListItemIcon>
            </Box>
            <Box>
                <Typography variant="h4">{props.totalNumbers}</Typography>
                <Typography variant="p">{props.subTotal}</Typography>
            </Box>


        </List>

    )
}

export default NumCards;