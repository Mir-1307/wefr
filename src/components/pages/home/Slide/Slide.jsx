import React from "react";
import style from "./Slide.module.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
function Slide() {
  const [val, setVal] = React.useState([]);
  React.useEffect(() => {
    axios.get("https://admin.taffeine.com/api/home/banner").then((res) => {
      setVal(res.data.data);
    });
  }, []);
  return (
    <div className={style.slide}>
      <OwlCarousel className="owl-theme" items={1} loop nav dots={false} key={`carousel_${val.length ? val.length : 0}`}>
        {val.map((item, index) => {
          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.url})` }}
              className={style.card}
            >
              <div className={style.backgroundColor}><div className="container">
                <div className={style.center}>
                  <div className={style.content}>
                        <h1 className={style.title}>{item.title}</h1>
                        <p className={style.text}>{item.short_content}</p>
                        <button button type="button" className={style.btn}>Узнать больше</button>
                  </div>
                </div></div>
              
                
                
              </div>
            </div>
          );
        })}
      </OwlCarousel>
    </div>
  );
}

export default Slide;