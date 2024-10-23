import React from "react";
import Boton from "./Boton"


function Card({cardtitle, cardtext, imgurl, imgClassName, imgtext}) {
    return (

            <div class="col">
                <div class="card h-100">
                <img src={imgurl} className={imgClassName} alt={imgtext} />
                    <div class="card-body">
                        <h5 class="card-title">{cardtitle}</h5>
                        <p class="card-text">{cardtext}</p>
                    </div>
                    <div class="card-footer col text-center">
                        <Boton className= "btn btn-primary" texto= "clicki" />
                    </div>
                </div>
            </div>

    )
}
export default Card