"use client";
import React, { useState } from "react";
import Link from "next/link";
import Style from "./Navbar.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import Logo from "../Logo/Logo";

export default function Navbar() {
  //Navigations Inhalt
  const startseite = "Startseite";
  const angebot = "Angebot";
  const aboutMe = "Über mich";
  const contact = "Kontakt";

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className={`navbar navbar-expand-lg   ${Style.nav_body}`}>
      <div className="container-fluid">
        {/* Navbar-Toggler für Mobile-Version*/}
        <div className="container d-flex justify-content-center">
          {/* Hauptnavigation */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="nav me-auto mb-2 mb-lg-0">
              <li>
                <Logo
                  _url="/"
                  _className={Style["logo"]}
                  _src="/img/Logo.svg"
                  _alt="logo"
                />
              </li>

              <li className="nav-link">
                <Link className={Style["nav-link"]} href="/">
                  {startseite}
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
              
              <li className="justify-self-end" style={{ textDecoration:"none ", listStyle:"none"}}>
                <a href="https://www.google.com/maps/place/8280+Kreuzlingen/@47.6405613,9.1317982,13z/data=!3m1!4b1!4m6!3m5!1s0x479af72e3a0ca66d:0xf2bbe4623eb9d6f2!8m2!3d47.6447397!4d9.1707858!16zL20vMDN6cWI3?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"> 
                  <img 
                  height= "30em"
                  src="/img/pin.png"
                  alt="Maps"/> </a> 
              </li>
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
