import styles from './HowIsTheOrder.module.css';
import phone from '../../img/orderImg/phone-call-3d-illustration_235528-1347.png';
import message from '../../img/orderImg/messages-3d-illustration_235528-1370.png';
import vallet from '../../img/orderImg/wallet-3d-illustration_235528-1346.png';
import pimMap from '../../img/orderImg/pim-map-illustration_235528-1350.png';
import Footer from '../footer/Footer';

const HowIsTheOrder = () => {
  const blocks = [
    {
      photo: phone,
      title: 'Оставить заявку ',
      text: 'через нашу форму сайте, это очень просто. Достаточно нажать на кнопку “Заказать”',
    },
    {
      photo: message,
      title: 'Специалист',
      text: 'свяжется с вами и согласует удобную для вас доставку и проконсультирует о товаре. ',
    },
    {
      photo: vallet,
      title: 'Курьер или почта',
      text: 'доставят ваш заказ от 1 до 3 дней по любую точку Белаурси.',
    },
    {
      photo: pimMap,
      title: 'После получения',
      text: 'оплачивайте ваш заказ. Курьеру или в отделении почты. И наслаждайтесь покупкой!',
    },
  ];

  return (
    <div className={styles.HowIsTheOrder}>
      <div className={styles.container}>
        <h2 className={styles.title}>Как происход заказ</h2>
        <div className={styles.blocks}>
          {blocks.map((item, index) => {
            return (
              <div className={styles.block}>
                <div className={styles.blockIkonContainer}>
                  <div className={styles.blockIkon}>
                    <img src={item.photo}></img>
                  </div>
                </div>
                <div className={styles.blockTitle}>{item.title}</div>
                <div className={styles.blockText}>{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default HowIsTheOrder;
