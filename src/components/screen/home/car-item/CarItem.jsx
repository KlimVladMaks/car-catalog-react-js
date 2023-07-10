/* eslint-disable react/prop-types */

// Импорты
import styles from "./CarItem.module.css"

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
                {/* Форматируем цену машины для отображения денежного формата*/}
                <p>
                {new Intl.NumberFormat('ru-RU', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0,
                }).format(car.price)}
                </p>

                {/* Кнопка для перехода к подробному описанию */}
                <button className="button">Узнать больше</button>

            </div>

        </div>
        )
}

// Экспортируем функциональный компонент для карточки отдельной машины
export default CarItem
