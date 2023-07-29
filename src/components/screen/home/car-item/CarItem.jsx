/* eslint-disable react/prop-types */

import Buttons from "./Buttons"
import styles from "./CarItem.module.css"
import Price from "./Price"

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
                <Price price={car.price}/>
                <Buttons car={car} cars={cars} setCars={setCars}/>
            </div>
        </div>
    )
}

export default CarItem
