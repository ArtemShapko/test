import { useEffect, useState } from 'react';
import styles from './Request.module.css';

const Request = (props) => {
  console.log(props);
  const checkPhone = /^([+]?[0-9\s-\(\)]{3,25})*$/i;

  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [userNameError, setUserNameError] = useState('Поле не может быть пустым');
  const [phoneError, setPhoneError] = useState('Поле не может быть пустым');
  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    if (userNameError || phoneError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [userNameError, phoneError]);
  return (
    <div className={styles.request}>
      <div className={styles.container}>
        <h2 className={styles.title}>Оставить заявку</h2>
        {userNameDirty && userNameError && <div className={styles.error}>{userNameError}</div>}
        <input
          name="userName"
          onBlur={(e) => {
            setUserNameDirty(e);
            console.log(!!e.target.value);
          }}
          onChange={(e) => {
            setUserName(e.target.value);
            if (e.target.value.length < 5 || e.target.value.length > 50) {
              setUserNameError('неправильно заполненно поле');
              console.log(e.target.value.length);
            } else {
              setUserNameError('');
            }
          }}
          value={userName}
          placeholder="введите имя"
          className={styles.name}
        />
        {phoneDirty && phoneError && <div className={styles.error}>{phoneError}</div>}
        <input
          onBlur={(e) => setPhoneDirty(e)}
          name="phone"
          onChange={(e) => {
            setPhone(e.target.value);
            if (!checkPhone.test(String(e.target.value).toLowerCase())) {
              setPhoneError('неправильно заполненно поле');
            } else {
              setPhoneError('');
            }
          }}
          value={phone}
          placeholder="+375 - __ - ____ - ____"
          className={styles.phone}
        />
        <button
          disabled={!formValid}
          onClick={() => {
            props.activeThanks(true);
          }}
          className={styles.button}>
          Заказать лампу
        </button>
      </div>
    </div>
  );
};

export default Request;
