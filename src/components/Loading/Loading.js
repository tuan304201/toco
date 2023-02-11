import React from 'react';
import classNames from 'classnames/bind';
import styles from './Loading.module.css';

const cx = classNames.bind(styles);

const Loading = () => {
    return (
        <div className={cx('container__loading')}>
            <div className={cx('overlay')}></div>
            <div className={cx('loader')}></div>
            <h1 className={cx('wellcome')}>Chào mừng bạn đến với TocoToco</h1>
            <p className={cx('text__wellcome')}>Vui lòng đợi trong giây lát để có trải nghiệm tốt hơn nhé!</p>
        </div>
    );
};

export default Loading;
