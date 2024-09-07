import React ,{ useState, useEffect } from "react";
import "react-bootstrap";
import style from "./Composition.module.css";
import axios from "axios";

function Composition() {
  const [val, setVal] = useState({});
  useEffect(() => {
    axios
      .get("https://admin.taffeine.com/api/home/product_composition")
      .then((res) => {
        setVal(res.data.data);
      });
  }, []);

  return (
    <div className="container">
      <div className={style.composition}>
      <h2 className={style.title}>{val.title}</h2>
      <div className={style.bigBox}>
      <img src={val.img} className={style.img} alt="" />
      <div className={style.box}>
          <table 
            className={style.table}
            dangerouslySetInnerHTML={{ __html: val.content }}
          ></table>
          <button type="button" className={style.button}>
                Купить онлайн
              </button>
          <button type="button" className={style.buttonTwo}>
                Найти в аптеках
              </button>
        </div>
      </div>
        
      </div>
    </div>
  );
}

export default Composition;