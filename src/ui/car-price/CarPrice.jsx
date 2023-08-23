/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import React from "react"

const currencyTypes = {
    "₽": "RUB",
    "$": "USD",
    "€": "EUR",
    "¥": "CNY",
}

/**
 * Функциональный компонент для отображения блока с ценой автомобиля.
 * @param {number} price - Цена автомобиля.
 * @param {string} currencyType - Тип валюты.
 * @returns {JSX.Element} - Блок с ценой автомобиля.
 */
const CarPrice = ({price, currencyType}) => {

    return (
        <p>
        { price === ""
            ? ""
            : new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: currencyTypes[currencyType],
                maximumFractionDigits: 0,
            }).format(price)}
        </p>
    )
}

export default React.memo(CarPrice)
