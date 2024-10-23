import React from "react";
import Boton from "./Boton"


function Card({cardtitle, cardtext, imgurl, imgClassName, imgtext, botontext}) {
    return (

            <div className="col">
                <div className="card h-100">
                <img src={imgurl} className={imgClassName} alt={imgtext} />
                    <div className="card-body">
                        <h5 className="card-title">{cardtitle}</h5>
                        <p clasNameclassNames="card-text">{cardtext}</p>
                    </div>
                    <div className="card-footer col text-center">
                        <Boton className= "btn btn-primary" texto= "Escoger clase" />
                    </div>
                </div>
            </div>

    )
}
export default Card