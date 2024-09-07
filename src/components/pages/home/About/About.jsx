import { useState, useEffect } from "react";
import style from "./About.module.css";
import axios from "axios";

function About() {
  const [val, setVal] = useState({});
  useEffect(() => {
    axios
      .get("https://admin.taffeine.com/api/home/about_product")
      .then((res) => {
        setVal(res.data.data);
      });
  }, []);

  return (
    <div className="container">
      <div className={style.about}>
        <div className={style.box}>
          <h1 className={style.title}>{val.title}</h1>
          <p
            className={style.text}
            dangerouslySetInnerHTML={{ __html: val.content }}
          ></p>
          <button type="button" className={style.button}>Подробно</button>
        </div>
        <img src={val.img} className={style.img} alt="" />
      </div>
    </div>
  );
}

export default About;

