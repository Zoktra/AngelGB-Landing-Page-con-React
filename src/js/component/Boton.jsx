import React from "react";

const Boton = ({ className, texto }) => {
    return (
        <div>
            <button type="button" className= {className}>{texto}</button>
        </div>)
}

export default Boton