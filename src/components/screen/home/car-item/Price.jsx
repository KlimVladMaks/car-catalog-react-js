/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import React from "react"

const Price = ({price}) => {

    return (
        <p>
        {new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(price)}
        </p>

    )
}

export default React.memo(Price)
