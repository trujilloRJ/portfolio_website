import React from "react";
import styles from "./Presentation.module.scss";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import Brand from "../SVG/Brand";

export default function Presentation({ showed }) {
  return (
    <>
      <div className={styles.presentation}>
        <div
          className={[
            styles.presentation__left,
            showed ? styles.showed : ""
          ].join(" ")}
        >
          <div className={styles.presentation__brand}>
            <Brand />
          </div>
          <div className={styles.presentation__quote}>
            PhD Student and Developper
          </div>
        </div>
        <div
          className={[
            styles.presentation__right,
            showed ? styles.showed : ""
          ].join(" ")}
        >
          <div className={styles.presentation__nav}>
            <ul>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">Short Bio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className={styles.presentation__social}>
            <a href="#">
              <i className="fa fa-github fa-2x"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
