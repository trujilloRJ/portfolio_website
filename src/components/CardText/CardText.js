import React from "react";
import styles from "./CardText.module.scss";

export default function CardText({ props, children }) {
  return (
    <div className={styles.card} style={props.style}>
      <div
        className={[
          styles.card__heading,
          props.right ? styles.right : styles.left
        ].join(" ")}
      >
        {props.heading}
      </div>
      {children}
    </div>
  );
}
