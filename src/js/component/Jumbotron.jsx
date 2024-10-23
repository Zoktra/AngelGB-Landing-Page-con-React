import React from "react";
import Boton from "./Boton";

function Jumbotron({titulo, parrafo}) {
    return (
        <div className="my-4">
            <h1><strong>{titulo}</strong></h1>
            <p>{parrafo}</p>
            <Boton className= "btn btn-primary" texto= "Ir al foro" />
        </div>
    )
}
export default Jumbotron