/* eslint-disable react/prop-types */

import styles from "./CarCard.module.css"
import CarPrice from "../../../../ui/car-price/CarPrice"
import CarImage from "../../../../ui/car-image/CarImage"

/**
 * Функциональный компонент для отображения карточки автомобиля.
 * @param {Object} car - Объект с данными об автомобиле. 
 * @returns {JSX.Element} - Карточка автомобиля.
 */
const CarCard = ({car}) => {

    const isOnlyHeader = car.price || car.link

    return (
        <div key={car.id} className={styles.item}>
            <CarImage imageLink={car.image} />
            <div className={`${styles.info} ${isOnlyHeader || styles['only-header']}`}>
                <h2>{car.name}</h2>
                <CarPrice price={car.price} currencyType={car.currency}/>
                {car.link && (
                    <a href={car.link} target="_blank" rel="noreferrer">
                        <button className="button" style={{marginTop: '10px'}}>Перейти на сайт</button>
                    </a>
                )}
            </div>
        </div>
    )
}

export default CarCard
