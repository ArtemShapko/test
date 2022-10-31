import styles from './Thanks.module.css';
import heart from '../../img/heart_color.png';

const Thanks = (props) => {
  return (
    <div className={styles.thanks}>
      <div className={styles.container}>
        <img className={styles.photo} src={heart}></img>
        <div className={styles.title}>Спасибо за заявку</div>
        <div className={styles.text}>
          С вами свяжется первый освободившиеся менеджер. Мы ценим ваш выбор!
        </div>
        <button
          onClick={() => {
            props.activeThanks(false);
            props.activeRequest(false);
          }}
          className={styles.button}>
          Вернуться назад
        </button>
      </div>
    </div>
  );
};
export default Thanks;
