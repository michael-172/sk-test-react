import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import App_Navbar from "../Components/App_Navbar";
import BlogCard from "../Components/BlogCard";
import Footer from "../Components/Footer";
import styles from "../styles/Blogs.module.scss";
import PaginationForBlogs from "../Components/PaginationForBlogs";
import { pageMotion } from "../AnimatedRoutes";
import { motion } from "framer-motion";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <App_Navbar />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}
      >
        <div className={styles.Blogs}>
          <Container>
            <h2 className={styles.Header}>Blogs</h2>
            <span className={styles.Breadcrumb}>Home {">"} Blogs</span>

            <PaginationForBlogs
              items={[
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "178",
                "19",
                "17",
                "17",
                "17",
                "17",
                "3",
                "1",
                "2",
                "3",
              ]}
              itemsPerPage={10}
            />
          </Container>
        </div>

        <Footer />
      </motion.div>
    </>
  );
};

export default Blogs;
