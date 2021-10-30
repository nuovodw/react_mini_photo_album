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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
				<Container className={classes.cardGrid} maxWidth="md">
					<Grid container spacing={4}>
						{cards.map((card) => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image="https://source.unsplash.com/random"
										titles="image titles"
									/>
									<CardContent className={classes.cardContent}>
										<Typography gutterBottom variant="h5">
											Heading
										</Typography>
										<Typography>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Culpa, rerum?
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small" color="primary">
											View
										</Button>
										<Button size="small" color="primary">
											Edit
										</Button>
										<Button></Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
		</>
	);
};

export default App;
