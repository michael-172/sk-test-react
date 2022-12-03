import React, { useEffect } from "react";
import styles from "../styles/Work.module.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container } from "react-bootstrap";
import Pagination from "../Components/Pagination";
import DrawerAppBar from "../Components/Nav";
import { useDispatch } from "react-redux";
import { scrolled, notScrolled } from "../ReduxToolkit/ServicesSlice";
import App_Navbar from "../Components/App_Navbar";
import Footer from "../Components/Footer";
import { pageMotion } from "../AnimatedRoutes";
import { motion } from "framer-motion";

const Work = () => {
  const dispatch = useDispatch();
  const handleResize = () => {
    if (window.scrollY > 100) {
      dispatch(scrolled());
    } else {
      dispatch(notScrolled());
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleResize);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [handleResize]);

  const imgsArray = [
    "/Work/1 (1).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (6).png",
    "/Work/1 (1).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (6).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (1).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (6).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (6).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (6).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (6).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
  ];
  return (
    <>
      <App_Navbar />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}
      >
        <div className={styles.Work}>
          <Container>
            <h2 className={styles.Header}>Our Works</h2>
            <span className={styles.Breadcrumb}>Home {">"} Services</span>

            <Tabs
              defaultActiveKey="All"
              transition={false}
              id="noanim-tab-example"
              className={`mb-3 ${styles.TabsWrapper} container`}
            >
              <Tab eventKey="All" title="All">
                <Pagination items={imgsArray} itemsPerPage={10} />
              </Tab>

              <Tab eventKey="Branding" title="Branding">
                <Pagination items={imgsArray} itemsPerPage={10} />
              </Tab>

              <Tab eventKey="Printing" title="Printing">
                <Pagination items={imgsArray} itemsPerPage={10} />
              </Tab>

              <Tab eventKey="Digital Marketing" title="Marketing">
                <Pagination items={imgsArray} itemsPerPage={10} />
              </Tab>

              <Tab eventKey="Photosessions" title="Photosessions">
                <Pagination items={imgsArray} itemsPerPage={10} />
              </Tab>

              <Tab eventKey="Web&App" title="Web&App">
                <Pagination items={imgsArray} itemsPerPage={10} />
              </Tab>

              <Tab eventKey="profile" title="Profile">
                <Pagination items={imgsArray} itemsPerPage={10} />
              </Tab>
            </Tabs>
          </Container>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default Work;
