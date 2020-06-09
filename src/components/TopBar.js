import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import img from './../images/MT_light_transparent.png'

const useStyles = makeStyles({
    logo:{
        width: 50,
        height:50
    }
})

function TopBar() {
   
    const classes= useStyles();
    const image = <img src="./../images/MT_light_transparent.png" alt="logo" />
    return (
        <AppBar position="static" color="transparent">
        <Toolbar >
                < img className={classes.logo} src={require("./../images/MT_light_transparent.png")} alt="image" />
                
        </Toolbar>
           

        </AppBar>
    )
}

export default TopBar;