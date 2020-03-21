import React from "react";
import styles from "./CardText.module.scss";

export default function CardText({ props, children }) {
  return (
    <div className={styles.card} style={props.style}>
      <div className={styles.card__heading}>{props.heading}</div>
      <div className={styles.card__text}>{children}</div>
    </div>
  );
}
