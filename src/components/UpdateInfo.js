import React from "react";
import empService from './../services/EmployeeServices'
import './CSS/form.css'
import './CSS/Utilities.css'
import { Container, Grid, Paper } from "@material-ui/core";
import TopBar from './TopBar'
import CustomButton from "./Button";

let service = new empService()

class UpdateInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            FirstName: '',
            LastName: '',
            Email: '',
            UserName: '',
            Password: '',
            City: '',
        }
    }

    componentDidMount() {
        let object = this.props.location.aboutProps;
        this.setState({ userId: object.myObj.userId });
        this.setState({ FirstName: object.myObj.firstName });
        this.setState({ LastName: object.myObj.lastName });
        this.setState({ Email: object.myObj.email });
        this.setState({ UserName: object.myObj.userName });
        this.setState({ Password: object.myObj.password });
        this.setState({ City: object.myObj.city });
    }



    handleChange = (e) => {
        console.log(e.target.value);

        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);

    }
    //method for update data
    update = () => {
        console.log("Employee ID", this.state.ID);
        console.log(this.state);
        let requestData = {
            userId: this.state.userId,
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Email: this.state.Email,
            UserName: this.state.UserName,
            Password: this.state.Password,
            City: this.state.City,
        };
        service.update(requestData).then((data) => {
            this.props.history.push("/AdminDashboard");
            console.log(" Employee Details Successfully Updated", data);


        }).catch((err) => {
            console.log(err);

        })
    }


    render() {
        return (
            <Container class="container">
                <Grid container component={Paper} class="grid">
                    <Grid item xs={12} >
                        <TopBar class="logoSection"></TopBar>
                    </Grid>
                   
                        <Container component="main" ref={this.props.containerRef} class="main">
                           
                        <Grid container direction='column' alignItems='center'>
                                <form class="form">
                                    <h2 class="form-title" align="center">Update Employee Details</h2>
                                    <p><label htmlFor="FirstName">First Name</label></p>
                                    <input type="text" name="FirstName" onChange={this.handleChange} value={this.state.FirstName} placeholder={this.state.FirstName} />


                                    <p><label htmlFor="LastName">Last Name</label></p>
                                    <input type="text" name="LastName" onChange={this.handleChange} value={this.state.LastName} placeholder={this.state.LastName} />


                                    <p><label htmlFor="Email">Email</label></p>
                                    <input type="text" name="Email" onChange={this.handleChange} value={this.state.Email} placeholder={this.state.Email} />


                                    <p><label htmlFor="City">City</label></p>
                                    <input type="text" name="City" onChange={this.handleChange} value={this.state.City} placeholder={this.state.City} />

                                
                            </form>
                           
                            <Grid container direction='row' alignItems='center' justify='space-around'>
                                    <CustomButton type="button" onClick={this.update} className="btn">
                                        Submit
                                    </CustomButton>
                                </Grid>

                            </Grid>
                        </Container>
                    
                </Grid>

            </Container>
        );
    }
}

export default UpdateInfo;