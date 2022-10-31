import styles from './Footer.module.css';
import Form from './form/Form';

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Скидка действует с 10 октября до 16 октября</h2>
        <Form activeThanks={props.activeThanks} />
        <div className={styles.info}>
          <div className={styles.contacts}>
            <div className={styles.phone}>+375298318355</div>
            <div className={styles.gmail}>Ecom.marketprice@yandex.by</div>
          </div>
          <div className={styles.location}>
            <div className={styles.place}>ООО "МАРКЕТ ПРАЙС" УНП 193647586</div>
            <div className={styles.time}>Рабочее вермя с 9:00 до 17:00</div>
            <div className={styles.address}>почт.адрес: 220113, г. Минск (до востребования)</div>
          </div>
          <div className={styles.legalPoints}>
            <div className={styles.politics}>Политика конфиденциальности</div>
            <div className={styles.agreement}>Пользовательское соглашение</div>
          </div>
          <div className={styles.license}>2022 © Все права защищены. Lamp.softcotton.by</div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
