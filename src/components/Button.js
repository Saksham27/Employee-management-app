import React from 'react'
import { Button, makeStyles } from '@material-ui/core';



const CustomButton = (props) => {
    const { onClick, children, fullWidth, fontSize } = props;
    return (
        <Button 
        variant="contained" 
        className={props.className}
         onClick={props.onClick} 
         fullWidth={props.fullWidth}
        
            style={{
                fontSize: '1.2rem',
                margin: '0.5rem',
                padding: '0.3rem 1.5rem',
                borderRadius: '20px 5px',
                backgroundColor: '#dae1e7',
                color: '#27496d',}}
         >{props.children}</Button>
    )
}

export default CustomButton;