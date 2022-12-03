import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import App_Navbar from "../Components/App_Navbar";
import Footer from "../Components/Footer";
import styles from "../styles/ContactPage.module.scss";

const Contact = () => {
  return (
    <>
      <App_Navbar />
      <div className={styles.Contact}>
        <Container>
          <h2 className={styles.Heading}>Contact Us</h2>
          <span className={styles.Breadcrumb}>Home {">"} Contact</span>
          <Row>
            <Form className={styles.ContactForm}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="text" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  className={styles.msgInput}
                  type="text"
                  placeholder="Write Something..."
                />
              </Form.Group>

              <Button variant="primary" type="submit" className={styles.Button}>
                Submit
              </Button>
            </Form>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
