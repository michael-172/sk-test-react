import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "../styles/ClientsPage.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import App_Navbar from "../Components/App_Navbar";
import Footer from "../Components/Footer";

const Clients = () => {
  return (
    <>
      <App_Navbar />
      <div className={styles.Clients}>
        <Container>
          <h2 className={styles.Header}>Our Clients</h2>
          <span className={styles.Breadcrumb}>Home {">"} Clients</span>

          <Row className={styles.client_Text}>
            <div className={styles.Heading}>
              <img
                src={"/ClientsPage/App Logo Inspiraton 155.png"}
                width={35}
                height={57}
                alt={"summary egypt"}
              />
              <h2 className={styles.clientName}>Summary Egypt</h2>
            </div>

            <p className={styles.description}>
              A newspaper is a publication containing news and information and
              advertising. <br /> Photo taking services from photographers to
              global brands.
            </p>

            <button className={styles.Text_Button}>Contact Us</button>
          </Row>

          <Row className={styles.Clients__Bottom}>
            <h2 className={styles.Clients_Slider_Header}>
              Sample of Clint works
            </h2>

            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 3,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <img
                src={"/ClientsPage/Group 7341.png"}
                width={300}
                height={300}
                alt={"Huawei"}
                style={{ maxWidth: "100%" }}
              />

              <img
                src={"/ClientsPage/Group 7339.png"}
                width={300}
                height={300}
                alt={"Huawei"}
                style={{ maxWidth: "100%" }}
              />

              <img
                src={"/ClientsPage/Group 7341.png"}
                width={300}
                height={300}
                alt={"Huawei"}
                style={{ maxWidth: "100%" }}
              />
            </Carousel>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Clients;
