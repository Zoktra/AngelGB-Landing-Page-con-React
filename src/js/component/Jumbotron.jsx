import React from "react";
import Boton from "./Boton";

function Jumbotron({titulo, parrafo}) {
    return (
        <div>
            <h1>{titulo}</h1>
            <p>{parrafo}</p>
            <Boton className= "btn btn-primary" texto= "clickando" />
        </div>
    )
}
export default Jumbotron