import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CustomizedProgressBars from './progress';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard(props) {
    return (
        <Card sx={{ paddingX: "2%", margin: "3%", paddingY: "5%", }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                    {props.salesPeriod}
                </Typography>
                <Box sx={{display:"flex", alignItems:"center" , justifyContent:"space-between", paddingTop:"2%"}}>
                <Typography  variant="h5" component="div">
                    {props.percent >= 50 ? <ArrowUpwardIcon color='success' /> : <ArrowDownwardIcon color='error' />}
                    ${props.dollars}
                </Typography>
                <Typography color="text.secondary">
                    {props.percent}%
                </Typography>
                </Box>
            </CardContent>

            <CustomizedProgressBars progressVal={props.percent} />
        </Card>
    );
}
