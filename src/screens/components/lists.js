import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SettingsInputComponentOutlinedIcon from '@mui/icons-material/SettingsInputComponentOutlined';
import FormatAlignCenterOutlinedIcon from '@mui/icons-material/FormatAlignCenterOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';


export default function BasicList() {

    return (
        <Box sx={{ width: '100%', maxWidth: 360, color: "white" }}>
            <nav aria-label="main mailbox folders">
                <List sx={{
                    // hover states
                    '& .MuiListItemButton-root:hover': {
                        bgcolor: '#1E90FF',
                        '&, & .MuiListItemIcon-root': {
                            color: 'white',
                        },
                    },
                }}>
                    <ListItemText sx={{ paddingLeft: "5%", color: "white" }} disableTypography primary="Navigation" />
                    <Divider sx={{ backgroundColor: "lightgrey" }} />
                    <ListItem disablePadding >
                        <ListItemButton>
                            <ListItemIcon>
                                <DashboardRoundedIcon sx={{ color: "lightgrey" }} />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </ListItem>

                    <ListItemText sx={{ paddingLeft: "5%", color: "white" }} disableTypography primary="UI Element" />
                    <Divider sx={{ backgroundColor: "lightgrey" }} />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsInputComponentOutlinedIcon sx={{ color: "lightgrey" }} />
                            </ListItemIcon>
                            <ListItemText primary="Component" />
                        </ListItemButton>
                    </ListItem>

                    <ListItemText sx={{ paddingLeft: "5%", color: "white" }} disableTypography primary="Forms & Tables" />
                    <Divider sx={{ backgroundColor: "lightgrey" }} />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FormatAlignCenterOutlinedIcon sx={{ color: "lightgrey" }} />
                            </ListItemIcon>
                            <ListItemText primary="Form Elements" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TableChartOutlinedIcon sx={{ color: "lightgrey" }} />
                            </ListItemIcon>
                            <ListItemText primary="Table" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>


        </Box>
    );
}




