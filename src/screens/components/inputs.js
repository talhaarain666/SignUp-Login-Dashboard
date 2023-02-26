import { MarginOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";

function Inputs (props){
return<>


<TextField sx={{marginY: "5px" }} fullWidth={props.size} size="small" variant="filled" id="demo-helper-text-misaligned-no-helper" label={props.labels} />

</>

}

export default Inputs;