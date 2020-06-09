import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom'
import employeeService from './../services/EmployeeServices'
import jwt from 'jsonwebtoken'
import './CSS/form.css'
import { Grid, Container, Paper } from '@material-ui/core';
import TopBar from './TopBar'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CustomButton from './Button';
import './CSS/Utilities.css'



let service = new employeeService();

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            Username: '',
            Password: '',
            UserType: '',
            snackbar: ''
            
        }
        
        
    }
   
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // login method
    login = (event) => {
        event.preventDefault();
        let requestedData = {
            Username: this.state.Username,
            Password: this.state.Password,
            UserType: this.state.UserType
        }


        service.login(requestedData).then((json) => {         
            const token = json.data.token;
            localStorage.setItem('jwtToken', token);
            if (json.data.status === true) {
                if (json.data.token == '') {
                    this.props.history.push("/UserDashboard");
                    alert(`Login successful`);
                } else {
                    this.props.history.push("/AdminDashboard");
                    alert(`Login successful`)
                }   
            } else {
                return alert("login failed")
            }
        }).catch((err) => {
            alert("wrong input")
        });
    }


    render() {

        return (
            
                <Container class="container">
                    <Grid container component={Paper} class="grid">

                        <Grid item xs={12} >
                            <TopBar class="logoSection"></TopBar>
                        </Grid>
                        <Container component='main' class="main clearfix">
                            <Grid container direction='column' alignItems='center' >
                                <AccountCircleIcon fontSize="large" color="secondary" class="icon"></AccountCircleIcon>
                                <form class="form">
                                    <h2 align="center" class="form-title">Login</h2>
    
                                    <p>Username</p>
    
                                    <input type="text" id="username" name="Username" onChange={this.handleChange} value={this.state.Username} placeholder="Enter Username" title="Username is required" required />
                                    <p>Password</p>
                                    <input type="Password" name="Password" onChange={this.handleChange} value={this.state.Password} placeholder="Enter Password" title="Password is required" required />
                                    <p>User Type</p>
                                    <input type="text" name="UserType" onChange={this.handleChange} value={this.state.UserType} placeholder="Enter Designation" title="Password is required" required />
    
                                    <Grid container direction='row' alignItems='center' justify='space-around' >
                                        <CustomButton type="button" onClick={this.login} >
                                            Login
                                        </CustomButton>
    
                                    </Grid>
                                </form>
                            </Grid>
                        </Container>
                    </Grid>
                </Container>
          
        );
    }
}

export default Login;