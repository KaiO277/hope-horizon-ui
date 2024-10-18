import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images/logo.png';

const cx = classNames.bind(styles);
// console.log(images);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images} alt="Logo" />
                </div>
                <div className={cx('name-app')}>
                    <p>Hope Horizon</p>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
