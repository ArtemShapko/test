import styles from './Order.module.css';

function Order() {
  const items = [
    'Батарея держит до 12 часов',
    'Дистанционное управление',
    'Противоударный материал',
  ];

  return (
    <div className={styles.order}>
      <div className={styles.container}>
        <h1 className={styles.title}>byБеспроводная сенсорная кристалическая лампа</h1>
        <h2 className={styles.text}>
          Отличиный помощник для создания приятной атмсоферы дома и загородом.
        </h2>
        <div className={styles.items}>
          {items.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <div className={styles.itemText}>{item}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.gif}>
          <div className={styles.gifText}>gif</div>
        </div>
        <div className={styles.pricBlock}>
          <div className={styles.fullPrice}>
            <div className={styles.pastPrice}>
              <div className={styles.pastPriceText}>120руб</div>
            </div>
            <div className={styles.currentPrice}>
              <div className={styles.currentPriceText}>59,90руб</div>
            </div>
          </div>
          <div className={styles.discount}>
            <div className={styles.discountText}>-50%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
