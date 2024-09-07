import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
function Navbar() {
  const [val, setVal] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/menu").then((res) => {
      setVal(res.data.data);
    });
  },[]);
  return (
    <div className={style.cont}>
      <div className={style.navbar}>
        <div className="container">
          <div className={style.navbar__content}>
            <NavLink to="" className={style.logo}>
              <img src="https://taffeine.com/_nuxt/img/logo.6335003.svg" alt="" />
            </NavLink>
            <ul className={style.item}>
              {val.map((item,index) => {
                return (
                  <li key={index} className={style.item__list}>
                    <NavLink to={item.slug} className={style.item__link}>
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <div className={style.btnGroup}>
              <button className={style.btn__one}>Купить онлайн</button>
              <button className={style.btn__two}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAEZSURBVHja1JYxTkMxDIa/pAGqvkq0M2Jl4BZci50DMXIAjsHUgQEJ2kJf4cWxGehTIzYkZ8BTnMFf8tuOE8yMlhZpbM0BAUjAFDhxjp2BzwTMzeytyelDWEaga6hQF4HUopIOMVOsnBYAmgMSwM3tA1cXS9a7wSX4ojvl6XlzBIgomz6z7bNX9SBSjoAsynaf2e6dADEwlAowlMLqZecnUZ+ZTrSSKAtCRNUn2VIMMakkKoYGwyk+qkauq+j+8Y6Zgb1/+ORg3tGnCdcjQEUIBEzVB6CK5uoGJgJhAk4AimJUSVYpkCJxNvNqY6wq06xSeD00xp+nif3yOez9rHMAzoFLYOH8HK2B1TjRzka5HE2Ar/DvfxXfAwAeSZOQlTRuTwAAAABJRU5ErkJggg==" alt="" />Русский</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
