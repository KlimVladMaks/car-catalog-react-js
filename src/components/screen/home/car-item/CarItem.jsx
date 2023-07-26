/* eslint-disable react/prop-types */

// Импорты библиотек
import { Link } from "react-router-dom"

// Импорты файлов
import styles from "./CarItem.module.css"
import Price from "./Price"

// Функциональный компонент для карточки отдельной машины
function CarItem({car}) {

    // Возвращаем разметку компонента
    return (

        // Карточка машины
        <div key={car.id} className={styles.item}>

            {/* Изображение машины */}
            <div className={styles.image}
                style={{
                    backgroundImage: `url(${car.image})`
                }}/>

            {/* Блок с информацией о машине */}
            <div className={styles.info}>

                {/* Название машины */}
                <h2>{car.name}</h2>

                {/* Цена машины */}
                <Price price={car.price}/>

                {/* Кнопка для перехода на страницу отдельной машины */}
                <Link className="button" to={`/car/${car.id}`}>Узнать больше</Link>

            </div>

        </div>
        )
}

// Экспортируем функциональный компонент для карточки отдельной машины
export default CarItem
