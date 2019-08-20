import React from "react";

const NavBar = ({ totalCounters, totalPrice }) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<span className="navbar-brand" href="#">
				Navbar{" "}
				<span className="badge badge-pill badge-secondary">
					{totalCounters}
				</span>
				<span className="badge badge-pill badge-success m-2">
					{totalPrice}
				</span>
			</span>
		</nav>
	);
};

export default NavBar;
