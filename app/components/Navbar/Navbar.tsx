"use client"
import React, { useState } from 'react';
import Link from "next/link";
import Style from "./Navbar.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg   ${Style.nav_body}`}>
      <div className="container-fluid">
       
        {/* Navbar-Toggler für Mobile-Version*/}
        <div className="container d-flex justify-content-end btn-group dropstart">
      
          {/* Hauptnavigation */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="nav me-auto mb-2 mb-lg-0">
              <li className="nav-link">
                <Link className={Style["nav-link"]} href="/">
                  Home
                </Link>
              </li>

              <li className="nav-link">
                <Link className={Style["nav-link"]} href="/about">
                  About
                </Link>
              </li>

              <li className="nav-link">
                <Link className={Style["nav-link"]} href="/contact">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
            <Dropdown className='d-lg-none'>
                <Dropdown.Toggle 
                    bsPrefix="toggle"
                    variant="" 
                    id="dropdown-basic"
                    className={Style['navbar-toggler']}
                    // className='navbar-toggler'
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </Dropdown.Toggle>

                <Dropdown.Menu  className={Style['dropdown-menu']}>
                <Dropdown.Item as={Link} href="/" className={Style['dropdown-item']}>Home</Dropdown.Item>
                <Dropdown.Item as={Link} href="/about">About</Dropdown.Item>
                <Dropdown.Item as={Link} href="/contact">Kontakt</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
           
        </div>
      </div>
    </nav>
  );
}
