import React from "react";

function Navbar({titulo, }) {
    return (
        <div>
            <nav class="navbar navbar-expand-md ">
                <div class="container">
                    <div><a class="navbar-brand" href="#"><h3>{titulo}</h3></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link active" aria-current="page" href="#">About</a>
                        <a class="nav-link active" aria-current="page" href="#">Services</a>
                        <a class="nav-link active" aria-current="page" href="#">Contact</a>
                    </div>
                </div>

            </nav>
        </div>)
}
export default Navbar