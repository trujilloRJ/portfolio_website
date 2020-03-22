import React from "react";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function Contact() {
  return (
    <div id="contact" className={styles.contact}>
      <div className="container">
        <SectionHeading text="Find Me" />
        <div className={styles.contact__main}>
          <div className={[styles.contact__card, styles.gmail].join(" ")}>
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <span>trujillorodriguezjavier@gmail.com</span>
          </div>
          <div className={[styles.contact__card, styles.telegram].join(" ")}>
            <FontAwesomeIcon icon={faTelegram} size="lg" />
            <span>+39 333 265 0929</span>
          </div>
          <div className={[styles.contact__card, styles.whatsapp].join(" ")}>
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            <span>+39 349 457 5558</span>
          </div>
        </div>
      </div>
    </div>
  );
}
