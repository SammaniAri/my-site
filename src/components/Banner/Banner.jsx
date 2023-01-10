import React from "react";
import "./Banner.scss";
import MovingText from 'react-moving-text'

const Banner=()=>{

	return(
  <div className="banner">
	<MovingText
   type="jelly"
	 duration="1000ms"
	 delay="0s"
	 direction="alternate"
	 timing="ease-in-out"
	 iteration="3"
	 fillMode="forwards">
  Sammani Ariyarathne
</MovingText>
	</div>
	);
};

export default Banner;