import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/Navbar.module.scss";

const App_Navbar = () => {
  const [scrolled, setScrolled] = useState(true);
  const [activeLink, setActiveLink] = useState("");

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    window.addEventListener("scroll", handleScroll);
  }, [window.scrollY]);
  // Get the navbar

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#Services" },
    { name: "About", href: "/About" },
    { name: "Work", href: "/Work" },
    { name: "Clients", href: "/Clients" },
    { name: "Blogs", href: "/Blogs" },
    { name: "Contact", href: "/Contact" },
  ];
  const location = `${useLocation().pathname}${useLocation().hash}`;
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={`${styles.Navbar} ${
            scrolled === true ? "scrolled" : ""
          } navbar-expand-lg`}
        >
          <Container>
            <Link to={"/"}>
              <Navbar.Brand>
                <img
                  src={"../Asset 9.svg"}
                  width={201}
                  height={90}
                  alt="logo"
                  className={styles.NavbarBrand}
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className={styles.NavbarMobileMenu}
            >
              <img
                src={"/BurgerIcon.png"}
                width={30}
                height={21}
                alt="mobileMenuIcon"
              />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className="navbarLinks justify-content-end flex-grow-1 pe-3 gap-4"
                  style={{ position: "relative" }}
                >
                  {links.map((link, index) => (
                    <Link
                      to={`${link.href}`}
                      key={index}
                      onClick={() => {
                        setActiveLink(link.name);
                      }}
                      className={`nav-link ${
                        location === link.href ? "active" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default App_Navbar;