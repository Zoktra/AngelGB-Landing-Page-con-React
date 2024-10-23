import React from "react";

function Navbar({titulo, a1, a2, a3, a4}) {
    return (
        <div>
            <nav className="navbar bg-dark navbar-expand-md">
                <div className="container">
                    <div><a className="navbar-brand text-white row align-items-center" href="#"><h4>{titulo}</h4></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
                <div className="collapse navbar-collapse  text-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <a className="nav-link active text-white" aria-current="page" href="#">{a1}</a>
                        <a className="nav-link active text-white" aria-current="page" href="#">{a2}</a>
                        <a className="nav-link active text-white" aria-current="page" href="#">{a3}</a>
                        <a className="nav-link active text-white" aria-current="page" href="#">{a4}</a>
                    </div>
                </div>

            </nav>
        </div>)
}
export default Navbar