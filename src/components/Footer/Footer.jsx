import React from "react";
import "./Footer.scss";
import { logos } from "../../data";
 
const Footer=()=>{
	return(
  <footer className="footer">  
	<div className="logo-panel">
		{logos.map((logo)=>(
			<a href={logo.link}
			key={logo.id}
			rel="noreferrer"
			target="_blank"
			>
 <div typeof="button">
              <img className= "logoSize" src={logo.image}
							   />
            </div>
			</a>
		))
		}
	 
	</div>
	</footer>
	);
};

export default Footer;