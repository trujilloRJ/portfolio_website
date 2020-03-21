import React from "react";
import styles from "./Bio.module.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import CardText from "../CardText/CardText";
import ib from "../../images/ib.png";
import sapienza from "../../images/sapienza.png";

const cardTextProps = {
  heading: "Motivation",
  style: {
    background: "#ffffff"
  }
};
const cardEduProps = {
  heading: "Education",
  style: {
    background: "#ffffff"
  },
  right: true
};

export default function Bio() {
  return (
    <div id="bio" className={styles.bio}>
      <div className="container">
        <SectionHeading text="about" />
        <div className="grid g2">
          <CardText props={cardTextProps}>
            <div className={styles.bio__text}>
              I like data and extracting meaningful information from it. This
              pushed me into pursuing a Ph.D. in Radar and Remote Sensing. But
              this also made that I become interested in
              <span className="txt-focus"> Data Science</span> and worked as a
              data scientist for the telecom industry for almost a year. During
              that time, I've learned that no matter how accurate your machine
              learning model is or how good are the insights you extract from
              raw data if you don't show it and explaining it to the world in
              simple terms. I had learned the power of data visualization and I
              started to look into web User Interfaces. I have been learning
              <span className="txt-focus"> HTML, CSS, JavaScript </span>
              and JS frameworks like <span className="txt-focus">
                {" "}
                React{" "}
              </span>{" "}
              by developing apps. Therefore, if you have any dataset that needs
              to be analyzed and/or visualized or you just need a modern,
              responsive website where you can tell/sell something
              <span className="txt-focus"> I am your guy </span>.
            </div>
          </CardText>
          <CardText props={cardEduProps}>
            <div className={styles.edu__wrapper}>
              <div className={styles.edu}>
                <a href="https://www.ib.edu.ar/" target="blank">
                  <div className={styles.edu__photo}>
                    <div className={styles.edu__photo__container}>
                      <img src={ib} alt="Instituto Balseiro" />
                    </div>
                  </div>
                </a>
                <div className={styles.edu__info}>
                  <div className={styles.edu__name}>Balseiro Institute</div>
                  <div className={styles.edu__grade}>
                    B. Sc Telecommunications Engineering
                  </div>
                  <div className={styles.edu__remarks}>
                    A unique institute in Argentina that grants full
                    scholarchips to all its student but requires taking a
                    competitive admission exam.
                  </div>
                </div>
              </div>
              <div className={styles.edu}>
                <div className={styles.edu__info}>
                  <div className={[styles.edu__name, styles.right].join(" ")}>
                    Sapienza University of Rome
                  </div>
                  <div className={[styles.edu__grade, styles.right].join(" ")}>
                    PhD Radar & Remote Sensing
                  </div>
                  <div
                    className={[styles.edu__remarks, styles.right].join(" ")}
                  >
                    My research interest is focus on the study and efficient
                    implementation passive radar signal processing algorithms
                    for disturbance cancellation.
                  </div>
                </div>
                <a
                  href="https://phd.uniroma1.it/web/pagina.aspx?s=&i=3552&m=&l=EN&p=197&a="
                  target="blank"
                >
                  <div className={styles.edu__photo}>
                    <div className={styles.edu__photo__container}>
                      <img src={sapienza} alt="Sapienza University of Rome" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </CardText>
        </div>
      </div>
    </div>
  );
}
