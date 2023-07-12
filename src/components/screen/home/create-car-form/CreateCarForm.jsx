/* eslint-disable react/prop-types */

// Импорты библиотек
import { useState } from 'react'

// Импорты файлов
import styles from './CreateCarForm.module.css'

// Пустой объект для данных о машине
const clearData = {
    id: '',
    name: '',
    price: '',
    image: '',
}

// Создаём функциональный компонент для формы добавления автомобиля
const CreateCarForm = ({setCars}) => {

    // Создаём хук для отслеживания состояния информации об автомобиле
    const [data, setData] = useState(clearData)

    // Функция для создания карточки автомобиля
    // e - событие нажатия кнопки создания автомобиля
    const createCar = e => {

        // Отключаем стандартное реагирование на событие нажатия кнопки
        e.preventDefault()

        // Добавляем в список автомобилей все данные о предыдущих автомобилях и данные о новом автомобиле
        setCars(prev => [{
            id: prev.length + 1,
            ...data,
        }, ...prev, ])

        // Очищаем поля ввода
        setData(clearData)
    }

    // Возвращаем разметку компонента
    return (
        
        // Форма ввода данных о новой машине
        <form className={styles.form}>

            {/* Поле ввода названия машины */}
            {/* При вводе текста в поле ввода, изменяем значение переменной, хранящей имя автомобиля */}
            <input placeholder="Название автомобиля" 
                   onChange={e => setData({...data, name: e.target.value})} 
                   value={data.name} />

            {/* Поле ввода цены машины */}
            <input placeholder="Цена автомобиля"
                   onChange={e => setData({...data, price: e.target.value})} 
                   value={data.price} />

            {/* Поле ввода изображения машины */}
            <input placeholder="Изображение автомобиля"
                   onChange={e => setData({...data, image: e.target.value})}
                   value={data.image} />

            {/* Кнопка добавления карточки автомобиля */}
            {/* При нажатии на кнопку, вызывается функция создания автомобиля */}
            <button className="button" onClick={e => createCar(e)}>Добавить</button>

        </form>
    )    
}

// Экспортируем функциональный компонент
export default CreateCarForm
