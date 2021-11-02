import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export default function Main(){
    const theme = useTheme();
    const activeStyle = { backgroundColor:theme.palette.primary.main, color:"white"};
    return(
        <AppBar position="sticky">
            <Toolbar>
                <Button color="inherit" component={NavLink} to='/product' activeStyle={activeStyle}>Product</Button>
                <Button  color="inherit" component={NavLink} to='/employee' activeStyle={activeStyle}>Employee</Button>
                <Button  color="inherit" component={NavLink} to='/page' activeStyle={activeStyle}>Page</Button>
            </Toolbar>
        </AppBar>
    )
}