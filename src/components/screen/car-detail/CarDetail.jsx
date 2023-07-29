import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CarService } from "../../../services/car.service"
import CarItem from "../home/car-item/CarItem"
import styles from "./CarDetail.module.css"

/**
 * Функциональный компонент для отображения страницы с детальной информацией об автомобиле.
 * @returns {JSX.Element} - Страница с детальной информацией об автомобиле.
 */
const CarDetail = () => {

    const {id} = useParams()
    const [car, setCar] = useState({})

    /**
     * Хук, обновляющий данные об автомобиле при монтировании компонента и изменении параметра id автомобиля.
     * @param {string} id - id автомобиля.
     * @returns {void}
     */
    useEffect(() => {

        if (!id) return

        /**
         * Функция для получения данных об автомобиле по его id.
         * @returns {Object} - Данные об автомобиле.
         */
        const fetchData = async () => {
            const data = await CarService.getById(id);
            setCar(data);
        }

        fetchData();
    }, [id])

    if (!car?.name) return <p>Автомобиль не найден</p>

    return (
    <div>
        <Link to='/'>
            <img src="/back-arrow.svg" alt="Back" className={styles.backArrow} />
        </Link>
        <CarItem car={car}/>
    </div>
    )
}

export default CarDetail
