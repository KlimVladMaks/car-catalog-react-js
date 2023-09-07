/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import styles from "./Buttons.module.css"
import { CarService } from "../../../../../../services/car.service";

/**
 * Функциональный компонент для отображения блока с кнопками у карточки автомобиля.
 * @param {Object} car - Объект с данными об автомобиле.
 * @returns {JSX.Element} Блок с кнопками для карточки автомобиля.
 */
const Buttons = ({car, cars, setCars, setIsEditMenuOpen}) => {

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
        <div className={styles["buttons"]}>
            <Link className="button" to={`/car/${car.id}`}>Узнать больше</Link>
            <div className={styles["edit-del-buttons"]}>
                <button onClick={() => setIsEditMenuOpen(true)} className='button' style={{padding: '2px 2px 0 2px'}}>
                    <img src="/img/buttons/edit.svg" alt="Edit" style={{height: '30px'}} />
                </button>
                <button className='button lightcoral-hover' onClick={delCar} style={{padding: '1px'}}>
                    <img src="/img/buttons/waste-basket.svg" alt="Waste basket" style={{height: '30px'}} />
                </button>
            </div>
        </div>
    )
}

export default Buttons
