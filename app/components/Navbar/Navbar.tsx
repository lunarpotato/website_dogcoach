import Link from "next/link";
import Style from "./Navbar.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import Logo from "../Logo/Logo";

export default function Navbar() {
  //#region Titel für die Navigation
  const startseite = "Startseite";
  const angebot = "Angebot";
  const aboutMe = "Über mich";
  const contact = "Kontakt";
  //#endregion

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="container">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" href="/">
                Home
              </Link>
            </li>

              <li className="nav-link">
                <Link className={Style["nav-link"]} href="/angebot">
                  {angebot}
                </Link>
              </li>

              <li className="nav-link">
                <Link className={Style["nav-link"]} href="/about">
                  {aboutMe}
                </Link>
              </li>

              <li className="nav-link">
                <Link className={Style["nav-link"]} href="/contact">
                  {contact}
                </Link>
              </li>
            </ul>
          </div>
          <Dropdown
            className="d-lg-none"
            show={dropdownOpen}
            onToggle={toggleDropdown}
          >
            <Dropdown.Toggle
              bsPrefix="toggle"
              variant=""
              id="dropdown-basic"
              className={Style["navbar-toggler"]}
              type="button"
              aria-controls="navbarNavAltMarkup"
              aria-expanded={dropdownOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </Dropdown.Toggle>

            <Dropdown.Menu className={Style["dropdown-menu"]}>
              <Dropdown.Item
                as={Link}
                href="/"
                className={Style["dropdown-item"]}
              >
                {startseite}
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                href="/angebot"
                className={Style["dropdown-item"]}
              >
                {angebot}
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                href="/about"
                className={Style["dropdown-item"]}
              >
                {aboutMe}
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                href="/contact"
                className={Style["dropdown-item"]}
              >
                {contact}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}
