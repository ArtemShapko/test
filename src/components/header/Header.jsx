import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.logo}>logo</div>
          <div className={styles.menu}>МЕНЮ</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
