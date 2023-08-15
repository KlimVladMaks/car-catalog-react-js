/* eslint-disable react/prop-types */

import styles from "./CarCard.module.css"
import Price from "../../../../ui/price/Price"

/**
 * Функциональный компонент для отображения карточки автомобиля.
 * @param {Object} car - Объект с данными об автомобиле. 
 * @returns {JSX.Element} - Карточка автомобиля.
 */
const CarCard = ({car}) => {
    return (
        <div key={car.id} className={styles.item}>
            <div className={styles.image}
                style={{
                    backgroundImage: `url(${car.image})`
                }}/>
            <div className={styles.info}>
                <h2>{car.name}</h2>
                <Price price={car.price} currencyType={car.currency}/>
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
