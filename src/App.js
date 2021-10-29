import React from 'react';
import {
	Typography,
	AppBar,
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

const App = () => {
	return (
		<>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<PhotoCamera />
					<Typography variant="h6">Mini Photo Album</Typography>
				</Toolbar>
			</AppBar>

			<main>
				<div>
					<container maxWidth="sm">
						<Typography
							variant="h2"
							align="center"
							color="textPrimary"
							gutterBottom
						>
							Mini Photo Album
						</Typography>
					</container>
				</div>
			</main>
		</>
	);
};

export default App;
