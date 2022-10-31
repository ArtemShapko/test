import styles from './AboutTheProduct.module.css';
import imgOne from '../../img/Rectangle 103.png';
import imgTwo from '../../img/Rectangle 135.png';

function AboutTheProduct(props) {
  const items = [
    { title: 'Просто коснитесь', text: 'чтобы включить его, и пусть он освещает вашу комнату.' },
    { title: 'Просто коснитесь', text: 'чтобы включить его, и пусть он освещает вашу комнату.' },
    { title: 'Просто коснитесь', text: 'чтобы включить его, и пусть он освещает вашу комнату.' },
    { title: 'Просто коснитесь', text: 'чтобы включить его, и пусть он освещает вашу комнату.' },
  ];
  const photos = [imgOne, imgTwo];
  return (
    <div className={styles.AboutTheProduct}>
      <div className={styles.container}>
        <button onClick={() => props.activeRequest(true)} className={styles.button}>
          Заказать лампу
        </button>
        <h2 className={styles.title}>О товаре</h2>
        <div className={styles.items}>
          {items.map((item, index) => {
            return (
              <div key={index} className={styles.item}>
                <div className={styles.background}></div>
                <div className={styles.itemTitle}>{item.title}</div>
                <div className={styles.itemText}>{item.text}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.photoBlockTitle}>
          Отличный способ создать приятную и романтичесую атмосферу
        </div>
        <div className={styles.photos}>
          {photos.map((item, index) => {
            return <img key={index} className={styles.photo} src={item}></img>;
          })}
        </div>
        <div className={styles.yelowBlock}>
          <div className={styles.equipment}>
            <div className={styles.equipmentTitle}>Комплектация</div>
            <div className={styles.equipmentText}>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem page when looking
            </div>
          </div>
          <div className={styles.Specification}>
            <div className={styles.SpecificationTitle}>Спецификация:</div>
            <div className={styles.SpecificationText}>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem page when looking
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTheProduct;
