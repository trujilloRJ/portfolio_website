import React from "react";
import styles from "./LandingPage.module.scss";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

export default function LandingPage() {
  return (
    <>
      <div className={styles.lp__container}>
        <div className={styles.lp__left}>
          <div className={styles.lp__photo}></div>
          <div className={styles.lp__main_heading}>Javier Trujillo</div>
          <div className={styles.lp__sub_heading}>
            PhD Student and Developer
          </div>
          <div className={styles.lp__social_nav}>
            <a href="#">
              <i className="fa fa-linkedin fa-2x"></i>
            </a>
            <a href="#">
              <i className="fa fa-github fa-2x"></i>
            </a>
          </div>
          <a href="#">
            <div className={styles.lp__cta}>Contact Me</div>
          </a>
        </div>
        <div className={styles.lp__right}>
          <div className={styles.lp__link}>
            <a href="#">
              <div className={styles.lp__link__shape}></div>
            </a>
            <div className={styles.lp__link__text}>
              <a href="#">Projects</a>
            </div>
          </div>
          <div className={styles.lp__link}>
            <a href="#">
              <div className={styles.lp__link__shape}></div>
            </a>
            <div className={styles.lp__link__text}>
              <a href="#">Short bio</a>
            </div>
          </div>
          <div className={styles.lp__link}>
            <a href="#">
              <div className={styles.lp__link__shape}></div>
            </a>
            <div className={styles.lp__link__text}>
              <a href="#">Find Me</a>
            </div>
          </div>
          <div className={styles.lp__center}></div>
        </div>
      </div>
    </>
  );
}
