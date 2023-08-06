/* eslint-disable react/prop-types */

import { useState } from 'react'
import classNames from 'classnames'
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
    const [isPriceValid, setIsPriceValid] = useState(true);
    const [isPriceUsed, setIsPriceUsed] = useState(false);

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
        if (isNameValid && isPriceValid) {
            try {
                const newCar = await CarService.addNew({
                    id: getMaxId(cars) + 1,
                    ...data,
                })
                setCars([...cars, newCar]);
                setData(clearData);
                setIsNameValid(false);
                setIsNameUsed(false);
                setIsPriceValid(true);
                setIsPriceUsed(false);
            } catch (error) {
                alert("Не получилось добавить автомобиль. Обновите страницу или попробуйте позже.")
            }
        } else {
            setIsNameUsed(true);
            setIsPriceUsed(true);
        }
    }

    /**
     * Функция для отслеживания ввода значения какого-либо параметра данных автомобиля. 
     * @param {Event} event - Событие изменения значения параметра данных автомобиля.
     * @returns {void}
     */
    const handleInputChange = (event) => {
        let { name, value } = event.target;
        if (value.trim() === '') value = '';
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
     * Функция для отслеживания ввода значения цены автомобиля.
     * @param {Event} event - Событие изменения цены автомобиля.
     */
    const handlePriceInputChange = (event) => {
        const value = event.target.value;
        const valueWithoutSpaces = value.replace(/\s/g, '');
        setIsPriceValid(+valueWithoutSpaces || value.trim() === '');
        setIsPriceUsed(true);
        handleInputChange(event);
    }

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

    const priceInputClasses = classNames(
        styles['price-input'],
        {
            [styles['input-error']]: isPriceUsed && !isPriceValid && data.price.trim() !== ''
        }
    )

    return (
        <form className={styles.form}>

            <label htmlFor="name-input" className={styles['mandatory-label']}>
                *Обязательное поле
            </label>

            <input placeholder="Название автомобиля" 
                   name='name'
                   onChange={handleNameInputChange} 
                   value={data.name}
                   className={isNameUsed && !isNameValid ? styles['input-error'] : ''}
                   id='name-input' />
            
            <label htmlFor='name-input'>
                {(isNameUsed && !isNameValid) && 
                <span className={styles['error-message']}>*Поле с названием автомобиля не может быть пустым</span>}
            </label>

            <div className={styles['price-container']}>
                <input placeholder="Цена автомобиля"
                    className={priceInputClasses}
                    name='price'
                    onChange={handlePriceInputChange} 
                    value={data.price}
                    id='price-input' />

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

            <label htmlFor='price-input'>
                {(isPriceUsed && !isPriceValid && data.price.trim() !== '') && 
                <span className={styles['error-message']}>*Поле с ценой автомобиля должно содержать только цифры</span>}
            </label>

            <input placeholder="Изображение автомобиля"
                   name='image'
                   onChange={handleInputChange}
                   value={data.image} />

            <button className="button" onClick={e => createCar(e)}>Добавить</button>

        </form>
    )
}

export default CreateCarForm
