import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/BlogCard.module.scss";

const BlogCard = () => {
  return (
    <div className={styles.BlogCard}>
      <Link to="/Blogs/1">
        <img src="../Blogs/Blog1.png" alt="" />
        <div className={styles.text}>
          <div className={styles.text__top}>
            <h2 className={styles.field}>Photosession</h2>
            <span className={styles.date}>Februari 24,2022</span>
          </div>
          <h2 className={styles.text__bottom}>
            The 5 simples for markt sizing
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
