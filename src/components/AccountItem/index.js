import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d80d1f6d50cd3b37510964b21f2fb571~c5_720x720.jpeg?lk3s=a5d48078&x-expires=1709049600&x-signature=7ufI4Yl%2FRlzo%2BG%2FDXkdaEqpEdDU%3D"
        alt="Daoo"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Tran Hung Dao</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
        </h4>
        <span className={cx('username')}>tranhungdao</span>
      </div>
    </div>
  );
}

export default AccountItem;
