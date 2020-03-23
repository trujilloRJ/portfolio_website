import React from "react";
import styles from "./LandingPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import { Link, animateScroll as scroll } from "react-scroll";

const scrollTime = 300;

export default function LandingPage() {
  return (
    <>
      <div className={styles.lp__container}>
        <div className={styles.lp__left}>
          <div className={styles.lp__photo}></div>
          <h2 className={styles.lp__main_heading}>Javier Trujillo</h2>
          <div className={styles.lp__sub_heading}>
            PhD Student and Developer
          </div>
          <h1 className={styles.lp__heading}>Portfolio Website</h1>
          <div className={styles.lp__social_nav}>
            <a
              href="https://www.linkedin.com/in/javier-trujillo-rodriguez/"
              target="blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://github.com/trujilloRJ" target="blank">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href="mailto:trujillorodriguezjavier@gmail.com?subject=Hi there!">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
          </div>
          <Link
            className="link"
            to="contact"
            smooth={true}
            offset={0}
            duration={scrollTime}
          >
            <div className={styles.lp__cta}>Contact Me</div>
          </Link>
        </div>
        <div className={styles.lp__right}>
          <div className={styles.lp__link}>
            <Link
              className="link"
              to="projects"
              smooth={true}
              offset={0}
              duration={scrollTime}
            >
              <div className={styles.lp__link__shape}></div>
            </Link>
            <div className={styles.lp__link__text}>
              <Link
                className="link"
                to="projects"
                smooth={true}
                offset={0}
                duration={scrollTime}
              >
                Projects
              </Link>
            </div>
          </div>
          <div className={styles.lp__link}>
            <Link
              className="link"
              to="bio"
              smooth={true}
              offset={0}
              duration={scrollTime}
            >
              <div className={styles.lp__link__shape}></div>
            </Link>
            <div className={styles.lp__link__text}>
              <Link
                className="link"
                to="bio"
                smooth={true}
                offset={0}
                duration={scrollTime}
              >
                About
              </Link>
            </div>
          </div>
          <div className={styles.lp__link}>
            <Link
              className="link"
              to="contact"
              smooth={true}
              offset={0}
              duration={scrollTime}
            >
              <div className={styles.lp__link__shape}></div>
            </Link>
            <div className={styles.lp__link__text}>
              <Link
                className="link"
                to="contact"
                smooth={true}
                offset={0}
                duration={scrollTime}
              >
                Find Me
              </Link>
            </div>
          </div>
          <div className={styles.lp__center}></div>
        </div>
      </div>
    </>
  );
}
