import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';

export const ExchangeForm = () => {
  return (
    <form className={styles.form}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input title="Request format 15 USD in UAH" placeholder='15 USD in UAH' className={styles.input} pattern='^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$' />
    </form>
  );
};
