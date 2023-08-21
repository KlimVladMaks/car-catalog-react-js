/* eslint-disable react/prop-types */

import styles from "./DeleteCarsBox.module.css"
import { CarService } from "../../../../services/car.service";

/**
 * Функциональный компонент для отображения блока с кнопкой удаления всех автомобилей.
 * @returns {JSX.Element} - Блок с кнопкой удаления всех автомобилей.
 */
const DeleteCarsBox = ({setCars}) => {

    /**
     * Функция для попытки удаления всех автомобилей из базы данных (для удаления требуется подтверждение пользователя).
     */
    const attemptDeleteCars = () => {
        try {
            const isDeleteCars = confirm("Вы уверены, что хотите удалить все автомобили из списка?");
            if (isDeleteCars) {
                CarService.delAllCars();
                setCars([]);
            }
        } catch (error) {
            alert("Не получилось очистить список. Обновите страницу или попробуйте позже.");
        }
    }

    return (
        <div className={styles.container}>
            <button className="button lightcoral red-hover" onClick={attemptDeleteCars}>
                Очистить список
            </button>
        </div>
    )
}

export default DeleteCarsBox;
