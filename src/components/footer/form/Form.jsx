import styles from './Form.module.css';
import { useEffect, useState } from 'react';

const Form = (props) => {
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
        {userNameDirty && userNameError && <div className={styles.error}>{userNameError}</div>}
        <input
          name="userName"
          onBlur={(e) => {
            setUserNameDirty(e);
          }}
          onChange={(e) => {
            setUserName(e.target.value);
            if (e.target.value.length < 5 || e.target.value.length > 50) {
              setUserNameError('неправильно заполненно поле');
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
          onClick={() => {
            props.activeThanks(true);
            document.documentElement.scrollTop = 0;
            console.log(document);
          }}
          disabled={!formValid}
          className={styles.button}>
          Заказать лампу
        </button>
      </div>
    </div>
  );
};
export default Form;
