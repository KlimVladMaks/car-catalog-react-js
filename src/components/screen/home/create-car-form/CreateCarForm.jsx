/* eslint-disable react/prop-types */

// Импорты
import styles from './CreateCarForm.module.css'
import { useState } from 'react'

// Создаём функциональный компонент для формы добавления автомобиля
const CreateCarForm = ({setCars}) => {

    // Создаём хук для отслеживания ввода имени автомобиля
    // name - переменная, содержащая значение строки; setName - функция, позволяющая изменить значение строки
    const [name, setName] = useState('')

    // Хук для отслеживания ввода цены автомобиля
    const [price, setPrice] = useState('')

    // Хук для отслеживания ввода ссылки на изображение автомобиля
    const [image, setImage] = useState('')

    // Функция для создания карточки автомобиля
    // e - событие нажатия кнопки создания автомобиля
    const createCar = e => {

        // Отключаем стандартное реагирование на событие нажатия кнопки
        e.preventDefault()

        // Добавляем в список автомобилей все предыдущие автомобили и новый автомобиль
        setCars(prev => [{
            id: prev.length + 1,
            name: name,
            price: price,
            image: image,
        }, ...prev, ])
    }

    // Возвращаем разметку компонента
    return (
        
        // Форма ввода данных о новой машине
        <form className={styles.form}>

            {/* Поле ввода названия машины */}
            {/* При вводе текста в поле ввода, изменяем значение переменной, хранящей имя автомобиля */}
            <input placeholder="Название автомобиля" 
                   onChange={e => setName(e.target.value)} 
                   value={name} />

            {/* Поле ввода цены машины */}
            <input placeholder="Цена автомобиля"
                   onChange={e => setPrice(e.target.value)} 
                   value={price} />

            {/* Поле ввода изображения машины */}
            <input placeholder="Изображение автомобиля"
                   onChange={e => setImage(e.target.value)}
                   value={image} />

            {/* Кнопка добавления карточки автомобиля */}
            {/* При нажатии на кнопку, вызывается функция создания автомобиля */}
            <button className="button" onClick={e => createCar(e)}>Добавить</button>

        </form>
    )    
}

// Экспортируем функциональный компонент
export default CreateCarForm
