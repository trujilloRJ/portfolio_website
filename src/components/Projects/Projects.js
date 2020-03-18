import React from "react";
import styles from "./Projects.module.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import CardWork from "../CardWork/CardWork";
import GatsbyBlocks from "../SVG/GatsbyBlocks";
import ScubaCorals from "../SVG/ScubaCorals";
import CocktailWorld from "../SVG/CocktailWorld";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import react from "../../images/react.png";
import sass from "../../images/sass.png";
import gatsby from "../../images/gatsby.png";

const cardWorkProps1 = {
  text:
    "A web application to fetch cocktails and drinks data from a third party API. It includes more than 200 drink recipes",
  linkCode: "https://github.com/trujilloRJ/cocktail_world",
  linkWeb: "https://trujillorj.github.io/cocktail_world/",
  techList: [react, js, sass]
};
const cardWorkProps2 = {
  text:
    "A static website to promote an real Airbnb diving experience. It's a simple website with a clear call to action and Airbnb integration for payments and schedule",
  linkCode: "https://github.com/trujilloRJ/diving_website",
  linkWeb: "https://www.scubacorals.com/",
  techList: [html, css, js]
};
const cardWorkProps3 = {
  text:
    "A set of react components to integrate with the static site generator Gatsby. It includes stateless components for improved productivity",
  linkCode: "https://github.com/trujilloRJ/gatsby_blocks_v1",
  linkWeb: "https://competent-bassi-22acff.netlify.com/",
  techList: [gatsby, sass, js, react]
};

export default function Projects() {
  return (
    <div id="projects" className={styles.projects}>
      <div className="container">
        <SectionHeading text="Projects" />
        <div className="grid g3">
          <CardWork props={cardWorkProps1}>
            <CocktailWorld width={250} height={68} />
          </CardWork>
          <CardWork props={cardWorkProps2}>
            <ScubaCorals width={250} height={68} />
          </CardWork>
          <CardWork props={cardWorkProps3}>
            <GatsbyBlocks width={250} />
          </CardWork>
        </div>
      </div>
    </div>
  );
}
