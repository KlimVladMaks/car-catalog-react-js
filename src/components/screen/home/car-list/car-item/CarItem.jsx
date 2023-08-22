/* eslint-disable react/prop-types */

import Buttons from "./buttons/Buttons"
import styles from "./CarItem.module.css"
import CarPrice from "../../../../../ui/car-price/CarPrice"
import CarImage from "../../../../../ui/car-image/CarImage"

/**
 * Функциональный компонент для отображения карточки отдельного автомобиля.
 * @param {Object} car - Объект с данными об автомобиле.
 * @param {Array} cars - Массив автомобилей.
 * @param {Function} setCars - Функция для обновления массива автомобилей.
 * @returns {JSX.Element} - Карточка автомобиля.
 */
function CarItem({car, cars, setCars}) {
    return (
        <div key={car.id} id={`car-${car.id}`} className={styles.item}>
            <CarImage imageLink={car.image} />
            <div className={styles.info}>
                <h2>{car.name}</h2>
                <CarPrice price={car.price} currencyType={car.currency}/>
                <Buttons car={car} cars={cars} setCars={setCars}/>
            </div>
        </div>
    )
}

export default CarItem
