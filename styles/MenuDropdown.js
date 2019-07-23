import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
	menuButton : {
		marginRight : theme.spacing(2)
	},
	paper      : {
		marginRight : theme.spacing(1)
	}
}));

const MenuDropdown = () => {
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(false);
	const anchorRef = React.useRef(null);

	function handleToggle() {
		setOpen((prevOpen) => !prevOpen);
	}

	function handleClose(event) {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	}

	return (
		<div>
			<Button
				className={classes.menuButton}
				color="inherit"
				ref={anchorRef}
				aria-controls="menu-list-grow"
				aria-haspopup="true"
				onClick={handleToggle}
			>
				<MenuIcon />
			</Button>
			<Popper open={open} anchorEl={anchorRef.current} keepMounted transition>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
					>
						<Paper id="menu-list-grow" className={classes.paper}>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList>
									<Link href="/favourites">
										<MenuItem onClick={handleClose}>Favourites</MenuItem>
									</Link>
									<Link href="/search">
										<MenuItem onClick={handleClose}>Search Snack</MenuItem>
									</Link>
									<Link href="/">
										<MenuItem onClick={handleClose}>All Snacks</MenuItem>
									</Link>
									<Link href="/north_america">
										<MenuItem onClick={handleClose}>North America</MenuItem>
									</Link>

									<Link href="/central_america">
										<MenuItem onClick={handleClose}>Central America</MenuItem>
									</Link>

									<Link href="/south_america">
										<MenuItem onClick={handleClose}>South America</MenuItem>
									</Link>
									<Link href="/europe">
										<MenuItem onClick={handleClose}>Europe</MenuItem>
									</Link>
									<Link href="/asia">
										<MenuItem onClick={handleClose}>Asia</MenuItem>
									</Link>
									<Link href="/oceania">
										<MenuItem onClick={handleClose}>Oceania</MenuItem>
									</Link>
									<Link href="/add_snack">
										<MenuItem onClick={handleClose}>Add a Snack</MenuItem>
									</Link>
									<Link href="/logout">
										<MenuItem onClick={handleClose}>Logout</MenuItem>
									</Link>
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</div>
	);
};
export default MenuDropdown;
