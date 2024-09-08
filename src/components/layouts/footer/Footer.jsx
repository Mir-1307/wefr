import React from "react";
import style from "./Footer.module.css";
function Footer() {
  return (
    <div className={style.footer}>
        <div className="container">
          <div className={style.footerHeader}>
                <h2 className={style.headerTitle}>Будьте в курсе новостей</h2>
                <form className={style.footerInputGroup}>
                  <input placeholder="Электронный адрес" className={style.footerInput} type="email"/>
                  <button className={style.btn}>Отправить</button>
                </form>
          </div>

          <div className={style.footerBody}>
            <div className={style.footerContact}>
              <div class={style.footerBodyContact}>
	              <ul className={style.ul}>
		              <li className={style.li}>
                    <div class={style.svg}>
                      <img className={style.tel} src="../../../src/assets/icons/tel.svg" alt="" />
                    </div>
	 		              <div class={style.contactInfo}><a className={style.a} href="tel:+998901151333">+998901151333</a></div>
                  </li>
                  <li className={style.li}>
                    <div class={style.svg}>
                      <img src="../../../src/assets/icons/mail.svg" alt="" />
                    </div> 
			              <div class={style.contactInfo}><a className={style.a} href="mailto:info@sightex.uz">info@sightex.uz</a></div>
                  </li> 
                  <li className={style.li}>
                  <div class={style.svg}>
                      <img src="../../../src/assets/icons/location.svg" alt="" />
                    </div> 
			              <div class={style.contactInfo}><a className={style.a} href="https://goo.gl/maps/nVuUyquYunqT6Wfv9" target="_blank">Massiv Yalong'och 119A, Toshkent</a></div>
                  </li>
	              </ul>
	            </div>
              <div class={style.footerBodySocial}>
	              <ul className={style.ul}>
		              <li>
	            			<a class={style.socialInfo} href="https://www.instagram.com/taffeine_uzbekistan/" target="_blank">
                        <div class={style.svgIcon}>
                          <img src="../../../src/assets/icons/inst.svg" alt="" />
                        </div> 
                    </a>
		            	</li>
			            <li>
		              	<a class={style.socialInfo} href="https://t.me/taffeine_uz" target="_blank">
                        <div class={style.svgIcon}>
                          <img src="../../../src/assets/icons/tg.svg" alt="" />
                        </div>
                    </a>
		              </li>
		              <li>
			            	<a class={style.socialInfo} href="https://www.youtube.com/@taffeine_uz" target="_blank">
                        <div class={style.svgIcon}>
                          <img src="../../../src/assets/icons/youtube.svg" alt="" />
                        </div>
                    </a>
			            </li>
			            <li>
			            	<a class={style.socialInfo} href="https://www.facebook.com/profile.php?id=100089990846361" target="_blank">
                        <div class={style.svgIcon}>
                          <img src="../../../src/assets/icons/facebook.svg" alt="" />
                        </div>
                    </a>
			            </li>
		            </ul>
	            </div>
            </div>
                <div class={style.footerBodyMenu}>
                  <ul className={style.ul}>
                    <li>
                      <a className={style.menuItem} href="/#" >Главное</a>
                    </li>
                    <li>
                      <a className={style.menuItem} href="/events" >Мероприятия</a>
                    </li>
                    <li>
                      <a className={style.menuItem} href="/articles" >Статьи</a>
                    </li>
                    <li>
                      <a className={style.menuItem} href="/product">Продукт</a>
                    </li>
                    <li>
                      <a className={style.menuItem} href="/contact">Контакт</a>
                    </li>
                  </ul>
                </div>
              <iframe className={style.mapDiv} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5991.678894289978!2d69.3253659126892!3d41.334104470330935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x94c179903be6becc!2zNDHCsDIwJzEyLjkiTiA2OcKwMTknMzUuNyJF!5e0!3m2!1suz!2s!4v1673933288354!5m2!1suz!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div class={style.footerFooter}>
            <img className={style.footerLogo} src="https://taffeine.com/_nuxt/img/logo.6335003.svg" alt="taffeine"/> 
            <span className={style.footerText}>© Sightex LLC 2022 / Все права защищены</span>
          </div>

        </div>
    </div>
  )
} 

export default Footer;
