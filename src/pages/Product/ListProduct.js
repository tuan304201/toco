import { useState, useEffect } from 'react';
import api from '../../api/getProducts';
import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.css';
import { AddCircle } from '@mui/icons-material';
import { Accordion, AccordionTab } from 'primereact/accordion';
import LoadingProduct from '../../components/LoadingProduct/LoadingProduct';

const cx = classNames.bind(styles);

const HotOder = (props) => {
    const [products, setProducts] = useState([]);

    const { bills, setBills } = props;

    const handleAddItem = (item) => {
        const exist = bills.find((x) => x.id === item.id);
        if (exist) {
            setBills(bills.map((x) => (x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x)));
        } else {
            setBills([...bills, { ...item, qty: 1 }]);
        }
    };

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

    const hotProducts = products.filter((product) => product.categoryId === '1');
    const milkTea = products.filter((product) => product.categoryId === '2');
    const fruitTea = products.filter((product) => product.categoryId === '3');
    const macchiato = products.filter((product) => product.categoryId === '4');
    const yogurt = products.filter((product) => product.categoryId === '5');

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }, []);

    return (
        <div className={cx('product')}>
            <Accordion multiple activeIndex={[0]}>
                <AccordionTab header="Món nổi bật">
                    {loading ? (
                        <LoadingProduct />
                    ) : (
                        hotProducts.map((item) => (
                            <div className={cx('product-card')} key={item.id}>
                                <img src={item.img} alt="" />
                                <div className={cx('bot-card')}>
                                    <div className={cx('title')}>{item.title}</div>
                                    <div className={cx('price')}>
                                        <div className={cx('new-price')}>
                                            {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                        </div>
                                        <div className={cx('old-price')}>{item.oldPrice}</div>
                                    </div>
                                </div>
                                <button className={cx('btn-buy')} onClick={() => handleAddItem(item)} value={item}>
                                    <AddCircle style={{ fontSize: 'xx-large' }} />
                                </button>
                            </div>
                        ))
                    )}
                </AccordionTab>
                <AccordionTab header="Trà sữa">
                    {milkTea.map((item) => (
                        <div className={cx('product-card')} key={item.id}>
                            <img src={item.img} alt="" />
                            <div className={cx('bot-card')}>
                                <div className={cx('title')}>{item.title}</div>
                                <div className={cx('price')}>
                                    <div className={cx('new-price')}>
                                        {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                    </div>
                                    <div className={cx('old-price')}>{item.oldPrice}</div>
                                </div>
                            </div>
                            <button className={cx('btn-buy')} onClick={() => handleAddItem(item)} value={item}>
                                <AddCircle style={{ fontSize: 'xx-large' }} />
                            </button>
                        </div>
                    ))}
                </AccordionTab>
                <AccordionTab header="Fresh Fruit Tea">
                    {fruitTea.map((item) => (
                        <div className={cx('product-card')} key={item.id}>
                            <img src={item.img} alt="" />
                            <div className={cx('bot-card')}>
                                <div className={cx('title')}>{item.title}</div>
                                <div className={cx('price')}>
                                    <div className={cx('new-price')}>
                                        {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                    </div>
                                    <div className={cx('old-price')}>{item.oldPrice}</div>
                                </div>
                            </div>
                            <button className={cx('btn-buy')} onClick={() => handleAddItem(item)} value={item}>
                                <AddCircle style={{ fontSize: 'xx-large' }} />
                            </button>
                        </div>
                    ))}
                </AccordionTab>
                <AccordionTab header="Machiato Cream Cheese">
                    {macchiato.map((item) => (
                        <div className={cx('product-card')} key={item.id}>
                            <img src={item.img} alt="" />
                            <div className={cx('bot-card')}>
                                <div className={cx('title')}>{item.title}</div>
                                <div className={cx('price')}>
                                    <div className={cx('new-price')}>
                                        {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                    </div>
                                    <div className={cx('old-price')}>{item.oldPrice}</div>
                                </div>
                            </div>
                            <button className={cx('btn-buy')} onClick={() => handleAddItem(item)} value={item}>
                                <AddCircle style={{ fontSize: 'xx-large' }} />
                            </button>
                        </div>
                    ))}
                </AccordionTab>
                <AccordionTab header="Sữa Chua Dẻo">
                    {yogurt.map((item) => (
                        <div className={cx('product-card')} key={item.id}>
                            <img src={item.img} alt="" />
                            <div className={cx('bot-card')}>
                                <div className={cx('title')}>{item.title}</div>
                                <div className={cx('price')}>
                                    <div className={cx('new-price')}>
                                        {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                    </div>
                                    <div className={cx('old-price')}>{item.oldPrice}</div>
                                </div>
                            </div>
                            <button className={cx('btn-buy')} onClick={() => handleAddItem(item)} value={item}>
                                <AddCircle style={{ fontSize: 'xx-large' }} />
                            </button>
                        </div>
                    ))}
                </AccordionTab>
            </Accordion>
        </div>
    );
};

export default HotOder;
