import React from 'react';
import { Nav, NavItem, NavLink, UncontrolledCollapse } from 'reactstrap';

const MiniNavbar = () => {
	return (
		<div>
			<NavItem id="toggler">Browse Snacks</NavItem>
			<UncontrolledCollapse toggler="#toggler">
				<Nav className="navbar-collapse" navbar>
					<NavItem className="dropdown">
						<NavLink href="/north_america">North America</NavLink>
					</NavItem>
					<NavItem className="dropdown">
						<NavLink href="/central_america">Central America</NavLink>
					</NavItem>
					<NavItem className="dropdown">
						<NavLink href="/south_america">South America</NavLink>
					</NavItem>
					<NavItem className="dropdown">
						<NavLink href="/europe">Europe</NavLink>
					</NavItem>
					<NavItem className="dropdown">
						<NavLink href="/asia">Asia</NavLink>
					</NavItem>
					<NavItem className="dropdown">
						<NavLink href="/oceania">Oceania</NavLink>
					</NavItem>
					<NavItem className="dropdown">
						<NavLink href="/">All Snacks</NavLink>
					</NavItem>
				</Nav>
			</UncontrolledCollapse>
			<style jsx>{`
				div {
					align-self: start;
				}
			`}</style>
		</div>
	);
};

export default MiniNavbar;
