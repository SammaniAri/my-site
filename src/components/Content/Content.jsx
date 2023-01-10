import React from "react";
import "./Content.scss";
import Button from "../Button/Button";
const Content=()=>{
  return(
		<div className="content">
			<section className="left">
				<section className="top">
				<h2> Hello All!</h2>
        <p>
          I'm Sammani, a keen future- Frontend Developer and a nature lover 
        </p>
					</section> 
				<section className="bottom">
				<div> <Button>About Me </Button></div>
				<div> <Button>Contact Me </Button></div>
					</section> 
			</section>

			<section className="right"> 
<img className="image-background" src="ellipse1.svg" alt="background-art" />
<section className="image"> 
<img className="image" src="image1.svg" alt="photo-of-sammani" />
</section>
			</section>
			 </div>
 
  );
};



export default Content;