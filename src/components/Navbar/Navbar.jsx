import React from "react";
import "./Navbar.scss";

const Navbar=()=>{
	return(
 <nav className="navbar"> 
 <div>
	<ul>
		<li>
			<a href="#AboutMe"> About Me </a>
		</li>
		<li>
			<a href="#MyProjects"> My Projects </a>
		</li>
		<li>
			<a href="#ContactMe"> Contact Me </a>
		</li>
	</ul>
 </div>
 
 
 
 </nav>
	);
};

export default Navbar;