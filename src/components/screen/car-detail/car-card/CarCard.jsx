/* eslint-disable react/prop-types */

import styles from "./CarCard.module.css"
import Price from "../../../../ui/price/Price"

/**
 * Функциональный компонент для отображения карточки автомобиля.
 * @param {Object} car - Объект с данными об автомобиле. 
 * @returns {JSX.Element} - Карточка автомобиля.
 */
const CarCard = ({car}) => {

    const defaultCarImage = "../../../../../public/img/unknowns/unknown-car.png";
    const carImage = car.image || defaultCarImage

    return (
        <div key={car.id} className={styles.item}>
            <div className={styles.image}
                style={{
                    backgroundImage: `url(${carImage})`
                }}/>
            <div className={styles.info}>
                <h2>{car.name}</h2>
                <Price price={car.price} currencyType={car.currency}/>
                {car.link && (
                    <a href={car.link} target="_blank" rel="noreferrer">
                        <button className="button" style={{marginTop: '10px'}}>Перейти на сайт</button>
                    </a>
                )}
            </div>
        </div>
    )
}

export default CarCard
