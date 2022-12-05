import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import styles from "../styles/Work.module.scss";

const Work = () => {
  const [largeScreen, setLargeScreen] = useState(true);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setLargeScreen(true);
    } else {
      setLargeScreen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    window.innerWidth > 768 ? setLargeScreen(true) : setLargeScreen(false);
  }, [handleResize]);

  return (
    <div className={styles.WorkSection}>
      <Container className={styles.WorkContainer}>
        <h2 className="Work_Header">Our Work</h2>
        <Link to="/Work" className={styles.seeMoreLink}>
          See More
        </Link>
      </Container>

      {largeScreen ? (
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerclass="container-with-dots"
          dotListclassName=""
          draggable
          focusOnSelect={false}
          infinite
          itemclassName=""
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
              items: 1,
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
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={true}
          sliderclassName=""
          slidesToSlide={1}
          swipeable
        >
          <Container>
            <div className="slide parent">
              <div className="div1">
                <img src={"/Work/1 (7).png"} alt={"test_alt"} />
              </div>
              <div className="div2">
                <img src={"/Work/1 (2).png"} alt={"test_alt"} />{" "}
              </div>
              <div className="div3">
                <img src={"/Work/1 (3).png"} alt={"test_alt"} />
              </div>
              <div className="div4">
                <img src={"/Work/1 (4).png"} alt={"test_alt"} />{" "}
              </div>
              <div className="div5">
                {" "}
                <img src={"/Work/1 (1).png"} alt={"test_alt"} />
              </div>
              <div className="div6">
                {" "}
                <img src={"/Work/1 (5).png"} alt={"test_alt"} />
              </div>
              <div className="div7">
                <img src={"/Work/1 (6).png"} alt={"test_alt"} />{" "}
              </div>
            </div>
          </Container>

          <Container>
            <div className="slide parent">
              <div className="div1">
                <img src={"/Work/1 (7).png"} alt={"test_alt"} />
              </div>
              <div className="div2">
                <img src={"/Work/1 (2).png"} alt={"test_alt"} />{" "}
              </div>
              <div className="div3">
                <img src={"/Work/1 (3).png"} alt={"test_alt"} />
              </div>
              <div className="div4">
                <img src={"/Work/1 (4).png"} alt={"test_alt"} />{" "}
              </div>
              <div className="div5">
                {" "}
                <img src={"/Work/1 (1).png"} alt={"test_alt"} />
              </div>
              <div className="div6">
                {" "}
                <img src={"/Work/1 (5).png"} alt={"test_alt"} />
              </div>
              <div className="div7">
                <img src={"/Work/1 (6).png"} alt={"test_alt"} />{" "}
              </div>
            </div>
          </Container>

          <Container>
            <div className="slide parent">
              <div className="div1">
                <img src={"/Work/1 (7).png"} alt={"test_alt"} />
              </div>
              <div className="div2">
                <img src={"/Work/1 (2).png"} alt={"test_alt"} />{" "}
              </div>
              <div className="div3">
                <img src={"/Work/1 (3).png"} alt={"test_alt"} />
              </div>
              <div className="div4">
                <img src={"/Work/1 (4).png"} alt={"test_alt"} />{" "}
              </div>
              <div className="div5">
                {" "}
                <img src={"/Work/1 (1).png"} alt={"test_alt"} />
              </div>
              <div className="div6">
                {" "}
                <img src={"/Work/1 (5).png"} alt={"test_alt"} />
              </div>
              <div className="div7">
                <img src={"/Work/1 (6).png"} alt={"test_alt"} />{" "}
              </div>
            </div>
          </Container>

          <Container>
            <div className="slide parent">
              <div className="div1">
                <img src={"/Work/1 (7).png"} alt={"test_alt"} />
              </div>
              <div className="div2">
                <img src={"/Work/1 (2).png"} alt={"test_alt"} />{" "}
              </div>
              <div className="div3">
                <img src={"/Work/1 (3).png"} alt={"test_alt"} />
              </div>
              <div className="div4">
                <img src={"/Work/1 (4).png"} alt={"test_alt"} />{" "}
              </div>
              <div className="div5">
                {" "}
                <img src={"/Work/1 (1).png"} alt={"test_alt"} />
              </div>
              <div className="div6">
                {" "}
                <img src={"/Work/1 (5).png"} alt={"test_alt"} />
              </div>
              <div className="div7">
                <img src={"/Work/1 (6).png"} alt={"test_alt"} />{" "}
              </div>
            </div>
          </Container>

          <Container>
            <div className="slide parent">
              <div className="div1">
                <img src={"/Work/1 (7).png"} alt={"test_alt"} />
              </div>
              <div className="div2">
                <img src={"/Work/1 (2).png"} alt={"test_alt"} />{" "}
              </div>
              <div className="div3">
                <img src={"/Work/1 (3).png"} alt={"test_alt"} />
              </div>
              <div className="div4">
                <img src={"/Work/1 (4).png"} alt={"test_alt"} />{" "}
              </div>
              <div className="div5">
                {" "}
                <img src={"/Work/1 (1).png"} alt={"test_alt"} />
              </div>
              <div className="div6">
                {" "}
                <img src={"/Work/1 (5).png"} alt={"test_alt"} />
              </div>
              <div className="div7">
                <img src={"/Work/1 (6).png"} alt={"test_alt"} />{" "}
              </div>
            </div>
          </Container>
        </Carousel>
      ) : (
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
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
              partialVisibilityGutter: 0,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 0,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
              partialVisibilityGutter: 0,
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
            src={"/Work/1 (7).png"}
            alt={"test_alt"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <img
            src={"/Work/1 (2).png"}
            alt={"test_alt"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <img
            src={"/Work/1 (3).png"}
            alt={"test_alt"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <img
            src={"/Work/1 (4).png"}
            alt={"test_alt"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <img
            src={"/Work/1 (1).png"}
            alt={"test_alt"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <img
            src={"/Work/1 (5).png"}
            alt={"test_alt"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <img
            src={"/Work/1 (6).png"}
            alt={"test_alt"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Carousel>
      )}
    </div>
  );
};

export default Work;
