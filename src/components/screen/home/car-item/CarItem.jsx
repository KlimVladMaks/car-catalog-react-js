/* eslint-disable react/prop-types */

import Buttons from "./buttons/Buttons"
import styles from "./CarItem.module.css"
import Price from "./price/Price"

/**
 * Функциональный компонент для отображения карточки отдельного автомобиля.
 * @param {Object} car - Объект с данными об автомобиле.
 * @returns {JSX.Element} - Карточка автомобиля.
 */
function CarItem({car, cars, setCars}) {

    return (
        <div key={car.id} className={styles.item}>
            <div className={styles.image}
                style={{
                    backgroundImage: `url(${car.image})`
                }}/>
            <div className={styles.info}>
                <h2>{car.name}</h2>
                <Price price={car.price} currencyType={car.currency}/>
                <Buttons car={car} cars={cars} setCars={setCars}/>
            </div>
        </div>
    )
}

export default CarItem
