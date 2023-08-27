/* eslint-disable react/prop-types */

import styles from './PreviewCard.module.css';
import CarImage from "../../../../../ui/car-image/CarImage";
import CarPrice from "../../../../../ui/car-price/CarPrice";

const PreviewCard = ({inputData}) => {

    const isOnlyTitle = !inputData.price;

    return (
        <div className={styles.card}>
            <CarImage imageLink={inputData.image} />
            <div className={`${styles.info} ${isOnlyTitle && styles['only-title']}`}>
                <h2>{inputData.name}</h2>
                <CarPrice price={inputData.price}
                          currencyType={inputData.currency}/>
            </div>
        </div>
    );
}

export default PreviewCard;
