import React from 'react';
import { Grid, Container, Paper } from '@material-ui/core'
import image from './../images/Homepage.jpg'
import { Icon } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CustomButton from './Button';
import TopBar from './TopBar'
import employeeService from './../services/EmployeeServices'

let service = new employeeService();


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Firstname: '',
            Lastname: '',
            Email: '',
            Username: '',
            Password: '',
            UserType: '',
            City: ''
        }


    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // Register method
    register = (event) => {
        event.preventDefault();
        console.log(this.state);
        let requestedData = {
            Firstname: this.state.Firstname,
            Lastname: this.state.Lastname,
            Email: this.state.Email,
            Username: this.state.Username,
            Password: this.state.Password,
            UserType: this.state.UserType,
            City: this.state.City
        }


        service.register(requestedData).then((json) => {
            this.props.history.push("/");
            alert('Registration Successful');

            
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
                                <h2 align="center" class="form-title">Register</h2>
                                
                                <p>First Name</p>
                                <input type="text" id="firstname" name="Firstname" onChange={this.handleChange} value={this.state.Firstname} placeholder="Enter Firstname" title="firstname is required" required />

                                <p>Last Name</p>
                                <input type="text" id="lastname" name="Lastname" onChange={this.handleChange} value={this.state.Lastname} placeholder="Enter Lastname" title="Lastname is required" required />

                                <p>Email</p>
                                <input type="Email" id="email" name="Email" onChange={this.handleChange} value={this.state.Email} placeholder="Enter email" title="Email is required" required />

                                <p>Username</p>
                                <input type="text" id="username" name="Username" onChange={this.handleChange} value={this.state.Username} placeholder="Enter Username" title="Username is required" required />

                                <p>Password</p>
                                <input type="Password" name="Password" onChange={this.handleChange} value={this.state.Password} placeholder="Enter Password" title="Password is required" required />

                                <p>User Type</p>
                                <input type="text" name="UserType" onChange={this.handleChange} value={this.state.UserType} placeholder="Enter Designation" title="Password is required" required />

                                <p>City</p>
                                <input type="text" id="city" name="City" onChange={this.handleChange} value={this.state.City} placeholder="Enter City" title="City is required" required />

                                <Grid container direction='row' alignItems='center' justify='space-around' >
                                    <CustomButton type="button" onClick={this.register} >
                                        register
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


export default Register;