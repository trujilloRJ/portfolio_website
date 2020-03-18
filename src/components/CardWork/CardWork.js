import React from "react";
import cardStyles from "./CardWork.module.scss";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

export default function CardWork({ props, children }) {
  return (
    <>
      <div className={cardStyles.card}>
        <div className={cardStyles.card__brand}>{children}</div>
        <div className={cardStyles.card__text}>{props.text}</div>
        <div className={cardStyles.card__btn_list}>
          <div className={cardStyles.card__btn}>
            <a href={props.linkCode} target="blank">
              <i className="fa fa-github fa-2x"></i>
            </a>
          </div>
          <div className={cardStyles.card__btn}>
            <a href={props.linkWeb} target="blank">
              <i className="fa fa-globe fa-2x"></i>
            </a>
          </div>
        </div>
        <div className={cardStyles.card__tech}>
          <div className={cardStyles.card__tech__heading}>Technologies</div>
          <div className={cardStyles.card__tech__list}>
            {props.techList.map((img, i) => {
              return <img src={img} key={i} alt="" />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
