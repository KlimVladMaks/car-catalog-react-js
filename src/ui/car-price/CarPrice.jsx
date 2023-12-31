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

    let formattedPrice = price;
    if (typeof price === 'string') {
        formattedPrice = price.replace(/\s/g, '');
        formattedPrice = Number(formattedPrice);
    }

    return (
        <p>
        { price === ""
            ? ""
            : new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: currencyTypes[currencyType],
                maximumFractionDigits: 0,
            }).format(formattedPrice)}
        </p>
    )
}

export default React.memo(CarPrice)
