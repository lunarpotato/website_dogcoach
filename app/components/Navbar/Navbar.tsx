import Link from "next/link";
import Style from './Navbar.module.css';

export default function Navbar() {
    return (
          
    <nav className={`navbar navbar-expand-lg  ${Style.nav_body}`}>
        <div className="container-fluid">

            <div className="container d-flex justify-content-end">
                <button className="navbar-toggler" 
                    type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> 
                          
                    <ul className="nav me-auto mb-2 mb-lg-0">
                        <li className="nav-link">
                            <Link className={Style['nav-link']} href="/">Home</Link> 
                        </li>

                        <li className="nav-link">
                            <Link className={Style['nav-link']} href="/about">About</Link>
                        </li>

                        <li className="nav-link">
                            <Link className={Style['nav-link']} href="/contact">Kontakt</Link>
                        </li>
                
                    </ul> 
                </div>
            </div> 

        </div>

    </nav>

    )
}