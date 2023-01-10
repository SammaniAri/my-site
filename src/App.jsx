/** @format */
import "./App.scss";
import Banner from "./components/Banner/Banner";
import Button from "./components/Button/Button";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Banner/>
			<Content/>
			<Footer/>
		</div>
	);
}

export default App;
