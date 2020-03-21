import React from "react";
import styles from "./Bio.module.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import CardText from "../CardText/CardText";

const cardTextProps = {
  heading: "Motivation",
  style: {
    background: "#ffffff"
  }
};

export default function Bio() {
  return (
    <div id="bio" className={styles.bio}>
      <div className="container">
        <SectionHeading text="about" />
        <div className="grid g2">
          <CardText props={cardTextProps}>
            I like data and extracting meaningful information from it. This
            pushed me into pursuing a Ph.D. in Radar and Remote Sensing. But
            this also made that I become interested in
            <span className="txt-focus"> Data Science</span> and worked as a
            data scientist for the telecom industry for almost a year. During
            that time, I've learned that no matter how accurate your machine
            learning model is or how good are the insights you extract from raw
            data if you don't show it and explaining it to the world in simple
            terms. I had learned the power of data visualization and I started
            to look into web User Interfaces. I have been learning
            <span className="txt-focus"> HTML, CSS, JavaScript </span>
            and JS frameworks like <span className="txt-focus"> React </span> by
            developing apps. Therefore, if you have any dataset that needs to be
            analyzed and/or visualized or you just need a modern, responsive
            website where you can tell/sell something
            <span className="txt-focus"> I am your guy </span>.
          </CardText>
        </div>
      </div>
    </div>
  );
}
