import styles from './Benefits.module.css';

const Benefits = () => {
  const blocks = [
    {
      title: 'Загаловок',
      ikon: 'IKON',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
    },
    {
      title: 'Загаловок',
      ikon: 'IKON',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
    },
  ];

  return (
    <div className={styles.benefits}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши преимущества</h2>
        <div className={styles.blocks}>
          {blocks.map((item, index) => {
            return (
              <div className={styles.block}>
                <div className={styles.headBlock}>
                  <div className={styles.blockTitle}>{item.title}</div>
                  <div className={styles.blockIkonContainer}>
                    <div className={styles.blockIkon}>{item.ikon}</div>
                  </div>
                </div>
                <div className={styles.blockText}>{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Benefits;
