import React from 'react';
import classNames from 'classnames/bind';
import styles from './LoadingProduct.module.css';

const cx = classNames.bind(styles);

const LoadingProduct = () => {
    return (
        <div className={cx('container__loading')}>
            <div className={cx('loader')}></div>
        </div>
    );
};

export default LoadingProduct;
