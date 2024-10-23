import React from "react";

function Footer ({text}) {
    return (
        <div className="py-4" >
            <div className="bg-dark text-white text-center my-5 py-4">
                <span className="align-middle">{text}</span>
            </div>
        </div>
    )
}
export default Footer