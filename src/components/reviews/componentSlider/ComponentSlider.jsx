import styles from './ComponentSlider.module.css';
import Slider from 'react-slick';
import './_slick-theme.css';
import './_slick.css';
import star from '../../../img/Star 6.png';

const ComponentSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.slider}>
      {' '}
      <Slider {...settings}>
        <div className={styles.page}>
          <div className={styles.headSlider}>
            <div className={styles.date}>10.10.2022</div>
            <div className={styles.grade}>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
            </div>
          </div>
          <div className={styles.name}>Марта М.</div>
          <div className={styles.comment}>
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their
            default model tex
          </div>
          <div className={styles.photo}></div>
        </div>
        <div className={styles.page}>
          <div className={styles.headSlider}>
            <div className={styles.date}>10.10.2022</div>
            <div className={styles.grade}>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
            </div>
          </div>
          <div className={styles.name}>Настя П.</div>
          <div className={styles.comment}>
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their
            default model tex
          </div>
          <div className={styles.photo}></div>
        </div>
        <div className={styles.page}>
          <div className={styles.headSlider}>
            <div className={styles.date}>10.10.2022</div>
            <div className={styles.grade}>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
            </div>
          </div>
          <div className={styles.name}>Nika</div>
          <div className={styles.comment}>
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their
            default model tex
          </div>
          <div className={styles.photo}></div>
        </div>
        <div className={styles.page}>
          <div className={styles.headSlider}>
            <div className={styles.date}>10.10.2022</div>
            <div className={styles.grade}>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
            </div>
          </div>
          <div className={styles.name}>Мила Т.</div>
          <div className={styles.comment}>
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their
            default model tex
          </div>
          <div className={styles.photo}></div>
        </div>
        <div className={styles.page}>
          <div className={styles.headSlider}>
            <div className={styles.date}>10.10.2022</div>
            <div className={styles.grade}>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
            </div>
          </div>
          <div className={styles.name}>Катя А.</div>
          <div className={styles.comment}>
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their
            default model tex
          </div>
          <div className={styles.photo}></div>
        </div>
        <div className={styles.page}>
          <div className={styles.headSlider}>
            <div className={styles.date}>10.10.2022</div>
            <div className={styles.grade}>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
            </div>
          </div>
          <div className={styles.name}>liza</div>
          <div className={styles.comment}>
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their
            default model tex
          </div>
          <div className={styles.photo}></div>
        </div>
      </Slider>
    </div>
  );
};
export default ComponentSlider;
