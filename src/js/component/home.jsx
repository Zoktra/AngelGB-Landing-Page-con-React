import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card"
import Boton from "./Boton.jsx"
//create your first component
const Home = () => {
	return (
		<div className="container">
			<Navbar titulo="4geeks" />
			<Jumbotron titulo="Aprendiendo" parrafo="palabras palabras palabras" />
			<div class="row row-cols-1 row-cols-md-4 g-4">
				<Card cardtitle="Titulo" cardtext="" />
				<Card />
				<Card />
				<Card />
			</div>

		</div>
	);
};

export default Home;
