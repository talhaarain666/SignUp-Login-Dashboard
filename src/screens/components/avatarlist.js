import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Button, Divider } from '@mui/material';
import { Box } from '@mui/system';


export default function FolderList(props) {
    return (<>
        <List sx={{ width: '100%', bgcolor: 'background.paper', paddingY: "0%" }}>
            <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar src={props.avatarImgLink}></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={props.personName} secondary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                    </ListItem>
                </Box>
                <Box>
                    <Button size='small' variant='outlined' color='success' sx={{ marginBottom: "3px" }}>Approve</Button>
                    <Button size='small' variant='outlined' color='error'>Reject</Button>
                </Box>
            </Box>
        </List>
        <Divider />
    </>
    );
}
