import React from 'react';
import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';

const Navigationbar = () => {
	const [ collapse, setCollapse ] = useState(true);
	const toggleNavbar = () => {
		setCollapse(!collapse);
	};
	return (
		<div>
			<Navbar dark>
				<NavbarToggler onClick={toggleNavbar} className="mr-2" />
				<NavbarBrand href="/" className="mr-auto p-2">
					<h2>PICK MY SNACK</h2>
				</NavbarBrand>
				<NavbarBrand href="/about" className="p-2">
					About
				</NavbarBrand>
				<NavbarBrand href="/favourites" className="p-2">
					Favourites
				</NavbarBrand>
				<NavbarBrand href="/add_snack" className="p-2">
					Add a Snack
				</NavbarBrand>
				<Collapse isOpen={!collapse} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="/all_snacks">All Snacks</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/north_america">North America</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/central_america">Central America</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/south_america">South America</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/europe">Europe</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/asia">Asia</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/oceania">Oceania</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
			<style jsx>{`
				div {
					background-color: #5271ff;
					color: white;
					top: 0%;
				}
				h2 {
					font-family: 'Passion One', cursive;
				}
			`}</style>
		</div>
	);
};

export default Navigationbar;
