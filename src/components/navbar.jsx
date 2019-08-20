import React from "react";

const NavBar = ({ totalCounters }) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<span className="navbar-brand" href="#">
				Navbar{" "}
				<span className="badge badge-pill badge-secondary">
					{totalCounters}
				</span>
			</span>
		</nav>
	);
};

export default NavBar;
