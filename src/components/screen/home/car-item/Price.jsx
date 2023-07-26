/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

// Импорты библиотек
import React from "react"

// Функциональный компонент для отображения блока с ценой автомобиля
// Принимает на вход объект с ценой автомобиля
const Price = ({price}) => {

    // Возвращаем разметку компонента
    return (

        // Цена машины
        // Форматируем цену машины для отображения денежного формата
        <p>
        {new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(price)}
        </p>

    )
}

// Экспортируем функциональный компонент
// Используем React.memo() для избежания лишнего рендеринга компонента
export default React.memo(Price)
