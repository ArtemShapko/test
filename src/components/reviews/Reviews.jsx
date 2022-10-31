import ComponentSlider from './componentSlider/ComponentSlider';
import styles from './Reviews.module.css';

function Reviews() {
  return (
    <div className={styles.reviews}>
      <div className={styles.container}>
        <h2 className={styles.title}>Отзывы</h2>
        <div className={styles.slider}>
          <ComponentSlider />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
