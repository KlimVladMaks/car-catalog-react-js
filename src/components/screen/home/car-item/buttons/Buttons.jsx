/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import styles from "./Buttons.module.css"
import { CarService } from "../../../../../services/car.service";

/**
 * Функциональный компонент для отображения блока с кнопками у карточки автомобиля.
 * @param {Object} car - Объект с данными об автомобиле.
 * @returns {JSX.Element} Блок с кнопками для карточки автомобиля.
 */
const Buttons = ({car, cars, setCars}) => {

    /**
     * Функция для удаления автомобиля из базы данных.
     * @param {Event} e - Событие удаления автомобиля из базы данных (клик по кнопке "Удалить").
     */
    const delCar = async (e) => {
        e.preventDefault();
        try {
            await CarService.delById(car.id);
            setCars(cars.filter(checkedCar => checkedCar.id !== car.id));
        } catch (error) {
            alert("Не получилось удалить автомобиль. Обновите страницу или попробуйте позже.");
        }
    }

    return (
        <div className={styles.buttons}>
            <Link className="button" to={`/car/${car.id}`}>Узнать больше</Link>
            <button className='button lightcoral-hover' onClick={delCar} style={{padding: '1px'}}>
                <img src="/img/buttons/waste-basket.svg" alt="Waste basket" style={{height: '30px'}} />
            </button>
        </div>
    )
}

export default Buttons
