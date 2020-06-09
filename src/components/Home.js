import React from 'react';
import history from './../services/history'
import './CSS/Utilities.css'
import { Grid, Typography, Button, makeStyles, Container, CssBaseline } from '@material-ui/core'
import TopBar from './TopBar'
import image from './../images/Homepage.jpg'
import CustomButton from './Button';

const useStyles = makeStyles({
	root: {
		height: '100vh'
	},

	grid: {
		height: '100vh',
		backgroundImage: `linear-gradient(to bottom , rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url(${image})`,
		backgroundSize: 'cover'
	},

	logoSection: {
		height: '20%'
	},

	heroSection: {
		height: '70%',
		alignItems: 'center',
		color: 'white'
	},

	heroText: {
		height: '80%'
	},

	

	buttonSection: {
		height: '40%'

	}


});

function Home(props) {

	const classes = useStyles();
	

	return (
		<div className={classes.root}>
		
			<Grid container className={classes.grid}>
			
				
					<Grid item xs={12} >
						<TopBar className={classes.logoSection}></TopBar>
					</Grid>
	
					<Grid container xs={12} className={classes.heroSection}>
						<Grid xs={1} />
						<Grid item xs={11}  >
							<Typography variant="h1" className="color-primary" gutterBottom>
								Manage Team
							</Typography>
							<Typography variant="h5" gutterBottom>
								A one step management solution for you
							</Typography>
							<Typography variant="h5"  gutterBottom>
								A tool that helps you manage your team and employees
							</Typography>
						</Grid>
						<Grid item container xs={12} direction="row" className={classes.buttonSection} >
							<Grid xs={4} />
							<Grid item container xs={6} direction="row" justify="space-evenly" alignItems="center">
								<Grid item xs={3}>				
								<CustomButton onClick={() => history.push('./Login')}> Login </CustomButton>
								</Grid>
								<Grid item xs={3}>
								<CustomButton onClick={() => history.push('./Register')}> Sign Up </CustomButton>
								</Grid>
							</Grid>
							<Grid xs={2} />
						</Grid>
					</Grid>
				
			</Grid>
		</div>
	);
}

export default Home;
