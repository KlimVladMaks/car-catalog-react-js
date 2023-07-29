/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import styles from "./CarItem.module.css"
import Price from "./Price"

function CarItem({car}) {

    return (
        <div key={car.id} className={styles.item}>
            <div className={styles.image}
                style={{
                    backgroundImage: `url(${car.image})`
                }}/>
            <div className={styles.info}>
                <h2>{car.name}</h2>
                <Price price={car.price}/>
                <div className={styles.buttons}>

                    {/* Кнопка для перехода на страницу отдельной машины */}
                    <Link className="button one-line" to={`/car/${car.id}`}>Узнать больше</Link>

                    {/* Кнопка для удаления карточки машины */}
                    <button className='button del-button' style={{padding: '1px'}}>
                        <img src="/waste-basket.svg" alt="Waste basket" style={{height: '30px'}} />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default CarItem
