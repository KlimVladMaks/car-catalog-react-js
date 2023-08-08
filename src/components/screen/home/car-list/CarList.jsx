/* eslint-disable react/prop-types */

import styles from './CarList.module.css'
import { useState, useEffect } from 'react'
import { CarService } from '../../../../services/car.service'
import CarItem from '../car-item/CarItem'

/**
 * Функциональный компонент для отображения списка автомобилей.
 * @param {Array} cars - Массив автомобилей.
 * @param {Function} setCars - Функция для обновления массива автомобилей.
 * @returns {JSX.Element} Блок со списком автомобилей.
 */
const CarList = ({ cars, setCars }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        /**
         * Функция для получения и задания данных о всех автомобилях.
         * @returns {void}
         */
        const fetchData = async () => {
          try {
            const data = await CarService.getAll();
            setCars(data);
          } catch {
            setError("Не удалось получить данные об автомобилях.\nОбновите страницу или попробуйте позже.");
          } finally {
            setIsLoading(false);
          }
        }
    
        fetchData();
      }, [setCars])

    return (
        <div>
            {isLoading ? (
            <p className={styles.text}>Загрузка...</p>
            ) : error ? (
            <p><pre className={styles.text}>{error}</pre></p>
            ) : cars.length ? [...cars].reverse().map(car =>
            (<CarItem key={car.id} car={car} cars={cars} setCars={setCars} />)
            )
            : (<p className={styles.text}>Автомобилей пока нет</p>)
            }
        </div>
    )
}

export default CarList;
