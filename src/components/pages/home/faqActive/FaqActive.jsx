import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import style from './FaqActive.module.css';
import { Accordion } from "react-bootstrap";

function FaqActive() {
    return (
      <div className={style.Quetion}>
      <div className="container">
        <h1 className={style.title}>Часто задаваемые вопросы</h1>
        <Accordion defaultActiveKey="0" className={style.accordion}>
          <Accordion.Item eventKey="0" className={style.headerBody}>
            <Accordion.Header className={style.header}>
              <h2 className={style.btnText}>Что лучше, напитки с коффеином или таблетки?</h2>
            </Accordion.Header>
            <Accordion.Body className={style.body}>
              Напитки приятные на вкус, имеют в составе сахар, много воды. Эти
              качества делают их более привлекательными, в тоже время, не стоит
              употреблять энергетики ради вкуса, или утоления жажды. Таблетки с
              коффеином употребляют более ответственно и осознанно, для
              увеличения физической или умственной эффективности. Вероятность
              привыкания уменьшается в несколько раз.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
    );
  }

export default FaqActive;
