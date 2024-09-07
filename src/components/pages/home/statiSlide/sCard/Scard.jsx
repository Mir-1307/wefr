import React from "react";
import style from "./Scard.module.css";
function Scard(props) {
  return (
    <div className={style.card}>
      <img src={props.img} alt="" className={style.img} />
      <h2 className={style.title}> {props.title}</h2>
      <p className={style.text}>{props.text}</p>
    </div>
  );
}

export default Scard;
