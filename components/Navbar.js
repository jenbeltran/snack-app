import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuDropdown from '../src/styles/MenuDropdown';

const useStyles = makeStyles((theme) => ({
	root  : {
		flexGrow : 1
	},
	title : {
		flexGrow : 1
	}
}));

const Navbar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<MenuDropdown />
					<Typography variant="h6" className={classes.title}>
						Pick My Snack
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};
export default Navbar;
