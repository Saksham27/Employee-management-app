import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import { Update } from './../components/UpdateInfo'
import empService from './../services/EmployeeServices'
import CustomButton from './Button';
import './CSS/Utilities.css'
import './CSS/table.css'
import './CSS/Home.css'
import { Container, withStyles, Grid } from "@material-ui/core";
import TopBar from './TopBar'
import jwt from 'jsonwebtoken'

let service = new empService();

const StyledTableCell = withStyles((theme) => ({
    
    head: {
        backgroundColor: '#00909e',
        color: theme.palette.common.white,
        borderRadius: '10px 10px 0 0',
        textAlign: 'center',
        fontSize: '1.2rem'
    },
    body: {
        fontSize: '1rem',
        textAlign: 'center',
        borderColor: '#fff',
        backgroundColor: 'rgba(256,256,256,0.2)',
        color: '#fff'
        
    },
   
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

class AdminDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            User: [],
            isUserValid : '' 
        }
    }
    //for fetching Employee list from database
    componentDidMount() {      
        this.setState()
        this.getAllUser();
    }
    getAllUser = () => {
        service.getAllUser().then((json) => {
            
            this.setState({ User: json.data.data });
           
        }).catch((err) => {
            console.log(err);

        })
    }

    //for fetching Employee data from database and update data
    update = (obj) => {
        console.log("In update Method", obj);
        this.props.history.push('/update' + obj);

    }

    //for fetching Employee data from database by ID
    getspecificUser = (ID) => {
        service.getSpecificUser(ID).then((json) => {  
            if (json.data.status === 'Success') {
                alert('Record for ID found successfully!!');
            }
        })
    }

    //for delete Employee data from database by ID
    delete = (ID) => {
        service.delete(ID).then((json) => {
            if (json.data.status === true) {
                alert('Record deleted successfully!!');
              
            }
        })
    }

    render() {
        return (
            <div className="container">
                <Grid item xs={12} >
                    <TopBar class="logoSection"></TopBar>
                </Grid>
                <TableContainer >
                    <h2 align="right" class="signout"> <Link to="/" align="right"><CustomButton type="button" >
                            Sign out
              </CustomButton></Link></h2>
                    <h2 align="center" class="table-title">Users List </h2>
                    <Table stickyHeader aria-label="sticky table" id='Employee'>
                        <TableHead >
                            <StyledTableRow>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell align="right" >First Name</StyledTableCell>
                                <StyledTableCell align="right" >Last Name</StyledTableCell>
                                <StyledTableCell align="right" >Username</StyledTableCell>
                                <StyledTableCell align="right" >Email Address</StyledTableCell>
                                <StyledTableCell align="right" >User Type</StyledTableCell>
                                <StyledTableCell align="right" >City</StyledTableCell>
                               
                                <StyledTableCell align="right" >Update</StyledTableCell>
                                <StyledTableCell align="right" >Delete</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
    
                        <TableBody>
                            {
                                this.state.User.map((d, index) => {
                                    return <StyledTableRow key={index}>
                                        <StyledTableCell component="th" scope="row">
                                            {d.userId}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{d.firstName}</StyledTableCell>
                                        <StyledTableCell align="right">{d.lastName}</StyledTableCell>
                                        <StyledTableCell align="right">{d.userName}</StyledTableCell>
                                        <StyledTableCell align="right">{d.email}</StyledTableCell>
                                        <StyledTableCell align="right">{d.userType}</StyledTableCell>
                                        <StyledTableCell align="right">{d.city}</StyledTableCell>                               
                                        <StyledTableCell align="right"><Link to={{ pathname: '/update', aboutProps: { myObj: d } }}> <CustomButton type="button" onClick={() => this.update(d)} > Update </CustomButton> </Link></StyledTableCell>
                                        <StyledTableCell align="right"><CustomButton type="button" onClick={() => this.delete(d.userId)} > Delete </CustomButton></StyledTableCell>
                                    </StyledTableRow>
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default AdminDashboard;