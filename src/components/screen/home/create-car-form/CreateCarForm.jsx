/* eslint-disable react/prop-types */

import { useState } from 'react'
import styles from './CreateCarForm.module.css'
import { CarService } from '../../../../services/car.service'

const clearData = {
    name: '',
    price: '',
    image: '',
    currency: '₽',
}

const currencyOptions = ['₽', '$', '€', '¥']

/**
 * Функциональный компонент для создания формы для добавления нового автомобиля.
 * @param {Array} cars - Массив уже добавленных автомобилей.
 * @param {Function} setCars - Функция для обновления массива автомобилей.
 * @returns {JSX.Element} - Форма для добавления нового автомобиля.
 */
const CreateCarForm = ({cars, setCars}) => {

    const [data, setData] = useState(clearData)

    /**
     * Функция для получения наибольшего id автомобиля из заданного массива.
     * @param {Array} cars - Массив автомобилей.
     * @returns {number} Наибольший id автомобиля из заданного массива.
     */
    const getMaxId = (cars) => {
        return cars.reduce((max, car) => {
            return car.id > max ? car.id : max;
        }, 0);
    }

    /**
     * Функция для создания нового автомобиля и добавления его в базу данных.
     * @param {Event} e - Событие создания нового автомобиля (клик по кнопке "Добавить").
     * @returns {void}
     */
    const createCar = async (e) => {
        e.preventDefault()
        try {
            const newCar = await CarService.addNew({
                id: getMaxId(cars) + 1,
                ...data,
            })
            setCars([...cars, newCar]);
            setData(clearData);
        } catch (error) {
            alert("Не получилось добавить автомобиль. Обновите страницу или попробуйте позже.")
        }
    }

    /**
     * Функция для обновления значения изменённого параметра данных автомобиля. 
     * @param {Event} e - Событие изменения значения параметра данных автомобиля.
     * @returns {void}
     */
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    /**
     * Функция для обновления значения валюты цены автомобиля.
     * @param {Event} e - Событие изменения валюты цены автомобиля (выбор валюты в раскрывающемся списке).
     * @return {void}
     */
    const handleCurrencyChange = (e) => {
        setData({ ...data, currency: e.target.value });
    };

    return (
        <form className={styles.form}>

            <input placeholder="Название автомобиля" 
                   name='name' 
                   onChange={handleInputChange} 
                   value={data.name} />

            <div className={styles.priceContainer}>
                <input placeholder="Цена автомобиля"
                    className={styles.priceInput}
                    name='price'
                    onChange={handleInputChange} 
                    value={data.price} />

                <select className={styles.priceSelect} value={data.currency} onChange={handleCurrencyChange}>
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>

            <input placeholder="Изображение автомобиля"
                   name='image'
                   onChange={handleInputChange}
                   value={data.image} />
            <button className="button" onClick={e => createCar(e)}>Добавить</button>

        </form>
    )
}

export default CreateCarForm
