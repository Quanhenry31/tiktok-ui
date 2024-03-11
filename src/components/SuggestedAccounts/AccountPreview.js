import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('account-item')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f8cd0f74cc9087001bca56a5680ad61d~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1710316800&x-signature=7xs8OM0TXe962groMTiJFsW0di0%3D"
        alt="no-img"
      />
      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
          <strong>vkimnguyen3511</strong>
          <FontAwesomeIcon icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Vkimmm</p>
      </div>
    </div>
  );
}

AccountPreview.prototype = {};

export default AccountPreview;
