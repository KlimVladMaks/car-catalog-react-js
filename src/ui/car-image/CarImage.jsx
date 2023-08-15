/* eslint-disable react/prop-types */

import styles from "./CarImage.module.css"

/**
 * Функциональный компонент для отображения изображения автомобиля.
 * @param {string} imageLink - Ссылка на изображение.
 * @return {JSX.Element} - Изображение автомобиля или картинка по-умолчанию.
 */
const CarImage = ({imageLink}) => {

    const defaultCarImage = "../../../../../public/img/unknowns/unknown-car.png";
    const carImage = imageLink || defaultCarImage

    return (
        <div className={styles.image}
            style={{
                backgroundImage: `url(${carImage})`
            }} />
    )
}

export default CarImage
