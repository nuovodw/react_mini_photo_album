import React from 'react';
import {
	Typography,
	AppBar,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Toolbar,
	Container,
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';

const App = () => {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<PhotoCamera className={classes.icon} />
					<Typography variant="h6">Mini Photo Album</Typography>
				</Toolbar>
			</AppBar>

			<main>
				<div className={classes.container}>
					<Container maxWidth="sm">
						<Typography
							variant="h2"
							align="center"
							color="textPrimary"
							gutterBottom
						>
							Mini Photo Album
						</Typography>
						<Typography
							variant="h6"
							align="center"
							color="textSecondary"
							paragraph
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
							cupiditate amet et ipsum ratione voluptates in? Quia, similique
							incidunt. Culpa harum ipsa recusandae temporibus natus voluptas
							ratione eaque, adipisci cupiditate?
						</Typography>
						<div className={classes.button}>
							<Grid container spacing={2} justify="center">
								<Grid item>
									<Button variant="contained" color="primary">
										See photos
									</Button>
								</Grid>
								<Grid item>
									<Button variant="outlined" color="primary">
										Contact me
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
			</main>
		</>
	);
};

export default App;
