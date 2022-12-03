import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Container className={styles.Footer_container}>
        <Row className={styles.Footer_Row}>
          <Col className={` ${styles.column} first`} md={4}>
            <img
              src={"/Clients/Clients-Background.png"}
              width={378}
              height={477}
              className={styles.footerBack}
              alt={"clientsBack"}
            />
            <img
              src={"/footer logo.png"}
              width={139}
              height={71}
              alt={"footer logo"}
              className={styles.FooterLogo}
            />
            <span className={styles.firstSpan}>
              Skapluie Marketing Solutions <br /> For Businesses.
            </span>
            <span>
              Copyright © 2022 All right <br /> reserved
            </span>
          </Col>
          <Col className={`second ${styles.column}`} md={4}>
            <h3 className={`${styles.QuickLinks}`}>Quick Links</h3>
            <ul className={styles.footerUl}>
              <li>About Company</li>
              <li>Our Services</li>
              <li>Our Clients</li>
              <li>Our works</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col className={`${styles.column} ${styles.thirdColumn}`} md={4}>
            <span>Call Us Today</span>
            <h1 className={styles.PhoneNumber}>+ 22 3545 4353</h1>
            <Row style={{ width: "fit-content" }}>
              <Col className="justify-content-center d-flex">
                <img
                  src={"/footer/Facebook.png"}
                  width={40}
                  height={40}
                  alt={"clientsBack"}
                />
              </Col>
              <Col className="justify-content-center d-flex">
                <img
                  src={"/footer/Twitter.png"}
                  width={40}
                  height={40}
                  alt={"clientsBack"}
                />
              </Col>
              <Col className="justify-content-center d-flex">
                <img
                  src={"/footer/Youtube.png"}
                  width={40}
                  height={40}
                  alt={"clientsBack"}
                />
              </Col>
              <Col className="justify-content-center d-flex">
                <img
                  src={"/footer/Linkedin.png"}
                  width={40}
                  height={40}
                  alt={"clientsBack"}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
