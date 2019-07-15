import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	container : {
		display  : 'flex',
		flexWrap : 'wrap'
	},
	textField : {
		marginLeft  : theme.spacing(1),
		marginRight : theme.spacing(1)
	}
}));

const SnackInput = () => {
	const classes = useStyles();
	return (
		<form className={classes.container}>
			<TextField
				required
				id="outlined-required"
				label="Snack Name"
				className={classes.textField}
				margin="normal"
				variant="outlined"
			/>
		</form>
	);
};
export default SnackInput;
