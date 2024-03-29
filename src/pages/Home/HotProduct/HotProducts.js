import { useState, useEffect } from 'react';
import api from '../../../api/getProducts';
import classNames from 'classnames/bind';
import styles from './HotProducts.module.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Button from '../../../components/Button/Button';

const cx = classNames.bind(styles);

const HotProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('products');
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, []);

    const allHotProducts = products.filter((product) => product.categoryId === '1');
    const hotProducts = allHotProducts.splice(0, 8);
    return (
        <div className={cx('container-hot-product')}>
            <div className={cx('title-hot-product')}>
                <div className={cx('product-container')}>
                    <SectionTitle title="ToCoToCo Menu" logan="SẢN PHẨM NỔI BẬT" />
                    <div className={cx('product-wrapper')}>
                        {hotProducts.map((item) => (
                            <div key={item.id} className={cx('product-card')}>
                                <div className={cx('tag')}>
                                    <div className={cx('new-tag')}>{item.newTag}</div>
                                    <div className={item.discountTag ? cx('discount-tag') : cx('')}>
                                        {item.discountTag}
                                    </div>
                                </div>
                                <img src={item.img} alt="" />
                                <div className={cx('footer-card')}>
                                    <div className={cx('product-title')}>{item.title}</div>
                                    <div className={cx('product-price')}>
                                        <div className={cx('price')}>
                                            {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                        </div>
                                        <div className={cx('old-price')}>{item.oldPrice}</div>
                                    </div>
                                    <button className={cx('btn')}>ĐẶT NGAY</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button title="XEM TẤT CẢ" />
                </div>
            </div>
        </div>
    );
};

export default HotProducts;
