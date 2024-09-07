import React from "react";
import style from "./Review.module.css";
function Review() {
  return (
    <div className={style.review}>
      <div className="container">
        <div className={style.content}>
          <h2 className={style.title}>Оставьте честный отзыв</h2>
          <p className={style.text}>Оставьте честный отзыв</p>
          <form>
            <div className={style.box}>
              <label htmlFor="" className={style.label}>
                <span>Имя:</span>
                <input
                  type="text"
                  className={style.name}
                />
              </label>
              <label htmlFor="" className={style.label}>
                <span>Номер телефона или электронная почта:</span>
                <input
                  type="text"
                  className={style.email}
                />
              </label>
            </div>
            <label htmlFor="" className={style.labelTwo}>
              <span>Текст вопроса или запроса</span>
              <textarea className={style.textarea}></textarea>
            </label>
            <button type="button" className={style.btn}>
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Review;
