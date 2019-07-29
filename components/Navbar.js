import React from 'react';
import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import MiniNavbar from './MiniNavbar';

const Navigationbar = () => {
	const [ collapse, setCollapse ] = useState(true);
	const toggleNavbar = () => {
		setCollapse(!collapse);
	};
	return (
		<div>
			<Navbar dark>
				<NavbarToggler onClick={toggleNavbar} className="mr-2" />
				<NavbarBrand href="/" className="mr-auto">
					Pick My Snack
				</NavbarBrand>
				<Collapse isOpen={!collapse} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href="/favourites">Favourites</NavLink>
						</NavItem>
						<MiniNavbar />
						<NavItem>
							<NavLink href="/search">Search</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/add_snack">Add a Snack</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
			<style jsx>{`
				div {
					background-color: #7d53de;
					color: white;
				}
			`}</style>
		</div>
	);
};

export default Navigationbar;
