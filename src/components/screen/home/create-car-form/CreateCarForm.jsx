/* eslint-disable react/prop-types */

import { useState } from 'react'
import styles from './CreateCarForm.module.css'
import { CarService } from '../../../../services/car.service'

const clearData = {
    id: '',
    name: '',
    price: '',
    image: '',
}

/**
 * Функциональный компонент для создания формы для добавления нового автомобиля.
 * @param {Array} cars - Массив уже добавленных автомобилей.
 * @param {Function} setCars - Функция для обновления массива автомобилей.
 * @returns {JSX.Element} - Форма для добавления нового автомобиля.
 */
// TODO
// eslint-disable-next-line no-unused-vars
const CreateCarForm = ({cars, setCars}) => {

    const [data, setData] = useState(clearData)

    /**
     * Функция для создания нового автомобиля и добавления его в базу данных.
     * @param {Event} e - Событие создания нового автомобиля (клик по кнопке "Добавить").
     * @returns {void}
     */
    const createCar = (e) => {
        e.preventDefault()
        CarService.addNew({
            id: cars.length + 1,
            ...data,
        })
        setData(clearData)
    }

    return (
        <form className={styles.form}>
            <input placeholder="Название автомобиля" 
                   onChange={e => setData({...data, name: e.target.value})} 
                   value={data.name} />
            <input placeholder="Цена автомобиля"
                   onChange={e => setData({...data, price: e.target.value})} 
                   value={data.price} />
            <input placeholder="Изображение автомобиля"
                   onChange={e => setData({...data, image: e.target.value})}
                   value={data.image} />
            <button className="button" onClick={e => createCar(e)}>Добавить</button>
        </form>
    )    
}

export default CreateCarForm
