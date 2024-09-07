import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import style from "./EventSlide.module.css";
import axios from "axios";
import Scard from "./sCard/Scard";
function EventSlide() {
  const [val, setVal] = React.useState([]);
  React.useEffect(() => {
    axios.get("https://admin.taffeine.com/api/events").then((res) => {
      setVal(res.data.data);
    });
  }, []);
  return (
    <div className={style.slide}>
      <div className="container">
        <div className="b"><h1 className={style.bigTitle}>Мероприятия</h1>
        <OwlCarousel className="owl-theme" items={3} loop margin={10} nav key={`carousel_${val.length ? val.length : 0}`}>
          {val.map((item, index) => {
            return (
              <Scard
                key={index}
                img={item.url}
                title={item.title}
                text={item.content}
              />
            );
          })}
        </OwlCarousel></div>
        
      </div>
    </div>
  );
}

export default EventSlide;