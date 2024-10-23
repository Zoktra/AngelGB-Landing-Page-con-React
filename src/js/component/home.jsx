import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card"
import Boton from "./Boton.jsx"
import Footer from "./Footer.jsx";
//create your first component
const Home = () => {
	return (
		<div>
			<Navbar titulo="4geeks" a1={"Home"} a2={"About"} a3={"Services"} a4={"Contact"} />
			<div className="container">
				<Jumbotron titulo="Bienvenido a la pagina!" parrafo="Si quieres informacion de las clases, tacticas y distintas builds, dirigete al foro... pero si estas decidido elige una de las clases de abajo para recibir tu sobre !! " />
				<div class="row row-cols-1 row-cols-md-4 g-4">
					<Card imgurl={"https://cdn.alfabetajuega.com/alfabetajuega/2022/03/tejerred.jpg"} cardtitle={"Mago"} cardtext={"Su habilidad nos permite lanzar una bola de fuego a cualquier objetivo del tablero (incluyendo héroes) realizando un punto de daño. Versatilidad es la mejor palabra para definir al mago, que dispone una gran variedad de formas para realizar daño directo o controlar a su rival."} texto />
					<Card imgurl={"https://cdn.alfabetajuega.com/alfabetajuega/2022/03/tejerred.jpg"} cardtitle={"Paladin"} cardtext={"Una de las clases mas elegidas. La habilidad principal del paladín le permite invocar un esbirro de 1/1 en cada turno siempre que el jugador quiera. Control puro para siempre intentar tener ventaja en la mesa sobre nuestro rival."} />
					<Card imgurl={"https://cdn.alfabetajuega.com/alfabetajuega/2022/03/tejerred.jpg"} cardtitle={"Picaro"} cardtext={"Su poder de héroe le da un arma de 1/1 con la que atacar al enemigo o controlar la mesa. El sigilo es la mayor baza del pícaro, ofreciendo un gran control de la mesa que no quita las posibilidades que tiene este personaje para montar barajas agresivas que intenten terminar cuanto antes con nuestros rivales."} />
					<Card imgurl={"https://cdn.alfabetajuega.com/alfabetajuega/2022/03/tejerred.jpg"} cardtitle={"Guerrero"} cardtext={"Una de las clases que mas daño puede aguantar. El guerrero tiene la capacidad de añadir dos puntos de armadura (se pueden acumular) con su habilidad principal. Agresividad y control, tiene una enorme capacidad ofensiva."} />
				</div>
			</div>
			<Footer text={"Realizado por Angel Gallego, 2024"} />
		</div>
	);
};

export default Home;
