/* eslint-disable react/prop-types */

import { useState } from "react"
import styles from "./CarItem.module.css"
import Buttons from "./buttons/Buttons"
import CarPrice from "../../../../../ui/car-price/CarPrice"
import CarImage from "../../../../../ui/car-image/CarImage"
import EditMenu from "./edit-menu/EditMenu"

/**
 * Функциональный компонент для отображения карточки отдельного автомобиля.
 * @param {Object} car - Объект с данными об автомобиле.
 * @param {Array} cars - Массив автомобилей.
 * @param {Function} setCars - Функция для обновления массива автомобилей.
 * @returns {JSX.Element} - Карточка автомобиля.
 */
function CarItem({car, cars, setCars}) {

    let [carData, setCarData] = useState(car);
    let [isEditMenuOpen, setIsEditMenuOpen] = useState(false);

    return (
        <div key={carData.id} id={`car-${carData.id}`} className={styles.item}>
            <div>
                <CarImage imageLink={carData.image} />
                <div className={styles.info}>
                    <h2>{carData.name}</h2>
                    <CarPrice price={carData.price} currencyType={carData.currency}/>
                    <Buttons car={carData} 
                             cars={cars} 
                             setCars={setCars} 
                             setIsEditMenuOpen={setIsEditMenuOpen}/>
                </div>
            </div>
            {isEditMenuOpen && <EditMenu setIsEditMenuOpen={setIsEditMenuOpen}
                                         carData={carData}
                                         setCarData={setCarData}
                                         cars={cars}
                                         setCars={setCars} />}
        </div>
    )
}

export default CarItem
