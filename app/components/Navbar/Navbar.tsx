import Link from "next/link";

export default function Navbar() {
    return (
    
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container-fluid">
     
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" href="/">Home</Link> 
                </li>

                <li className="nav-item">
                    <Link className="nav-link" href="/about">About</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" href="/contact">Kontakt</Link>
                </li>
        
            </ul>  
    


      </div>
    
      </nav>

    )
}
