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
    const [isNameValid, setIsNameValid] = useState(false);
    const [isNameUsed, setIsNameUsed] = useState(false);

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
     * @param {Event} event - Событие создания нового автомобиля (клик по кнопке "Добавить").
     * @returns {void}
     */
    const createCar = async (event) => {
        event.preventDefault()
        if (isNameValid) {
            try {
                const newCar = await CarService.addNew({
                    id: getMaxId(cars) + 1,
                    ...data,
                })
                setCars([...cars, newCar]);
                setData(clearData);
                setIsNameValid(false);
                setIsNameUsed(false);
            } catch (error) {
                alert("Не получилось добавить автомобиль. Обновите страницу или попробуйте позже.")
            }
        } else {
            setIsNameUsed(true);
        }
    }

    /**
     * Функция для отслеживания ввода значения какого-либо параметра данных автомобиля. 
     * @param {Event} event - Событие изменения значения параметра данных автомобиля.
     * @returns {void}
     */
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    /**
     * Функция для отслеживания ввода значения валюты цены автомобиля.
     * @param {Event} event - Событие изменения валюты цены автомобиля (выбор валюты в раскрывающемся списке).
     * @return {void}
     */
    const handleCurrencyChange = (event) => {
        setData({ ...data, currency: event.target.value });
    };

    /**
     * Функция для отслеживания ввода значения имени автомобиля.
     * @param {Event} event - Событие изменения имени автомобиля.
     * @returns {void}
     */
    const handleNameInputChange = (event) => {
        const {value} = event.target
        setIsNameValid(value.trim() !== '');
        setIsNameUsed(true);
        handleInputChange(event);
    }

    return (
        <form className={styles.form}>

            <input placeholder="Название автомобиля" 
                   name='name'
                   onChange={handleNameInputChange} 
                   value={data.name}
                   className={isNameUsed && !isNameValid ? styles['input-error'] : ''} />

            <div className={styles['price-container']}>
                <input placeholder="Цена автомобиля"
                    className={styles['price-input']}
                    name='price'
                    onChange={handleInputChange} 
                    value={data.price} />

                <select className={styles['price-select']} 
                        value={data.currency} 
                        onChange={handleCurrencyChange}>
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
