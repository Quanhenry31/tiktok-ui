import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wapper({ children }) {
  return <div className={cx('Wapper')}>{children}</div>;
}

export default Wapper;
