/* eslint-disable react/prop-types */

import styles from "./EditMenu.module.css";
import { CarService } from "../../../../../../services/car.service";

/**
 * Функциональный компонент для отображения меню редактирования автомобиля.
 * @param {Function} setIsEditMenuOpen - Функция для изменения состояния закрытия/открытия меню.
 * @param {Object} carData - Объект с данными об автомобиле.
 * @param {Function} setCarData - Функция для изменения данных об автомобиле.
 * @returns {JSX.Element} Меню редактирования автомобиля.
 */
const EditMenu = ({ setIsEditMenuOpen, carData, setCarData }) => {

    /**
     * Функция для изменения данных об автомобиле.
     * @param {Event} event - Событие изменения данных автомобиля.
     */
    const handleInputChange = (event) => {
        setCarData({ ...carData, [event.target.name]: event.target.value });
    }

    /**
     * Функция для обновления данных об автомобиле на сервере.
     * @param {Event} event - Событие изменения данных автомобиля (нажатие на кнопку "Сохранить").
     */
    const updateCar = async (event) => {
        event.preventDefault();
        await CarService.updateCar(carData);
        setIsEditMenuOpen(false);
    }

    return (
        <div className={styles["edit-card"]}>
            <form className={styles["edit-form"]}>
                <input type="text" 
                       placeholder="Название автомобиля"
                       name="name"
                       onChange={handleInputChange}
                       value={carData.name} />

                <input type="text" 
                       placeholder="Цена автомобиля"
                       name="price"
                       onChange={handleInputChange}
                       value={carData.price} />

                <input type="text" 
                       placeholder="Изображение автомобиля"
                       name="image"
                       onChange={handleInputChange}
                       value={carData.image} />

                <input type="text" 
                       placeholder="Сайт автомобиля"
                       name="link"
                       onChange={handleInputChange}
                       value={carData.link} />

                <div className={styles["buttons"]}>
                    <button className="button"
                            onClick={updateCar}>Сохранить</button>
                    <button className="button lightcoral-hover"
                            onClick={() => setIsEditMenuOpen(false)}>Отменить</button>
                </div>
            </form>
        </div>
    );
}

export default EditMenu;
