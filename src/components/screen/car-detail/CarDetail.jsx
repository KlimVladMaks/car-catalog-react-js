import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { Link, useParams } from "react-router-dom"
import { CarService } from "../../../services/car.service"
import styles from "./CarDetail.module.css"
import CarCard from "./car-card/CarCard"

/**
 * Функциональный компонент для отображения страницы с детальной информацией об автомобиле.
 * @returns {JSX.Element} - Страница с детальной информацией об автомобиле.
 */
const CarDetail = () => {

    const {id} = useParams()
    const [car, setCar] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        if (!id) return

        /**
         * Функция для получения данных об автомобиле по его id.
         * @returns {Object} - Данные об автомобиле.
         */
        const fetchData = async () => {
            try {
                const data = await CarService.getById(id);
                setCar(data);
            } catch {
                setError("Не удалось получить данные об автомобиле.\nОбновите страницу или попробуйте позже.");
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();

        if (car.name) {
            document.title = `Страница автомобиля ${car.name}`
        }
    }, [id, car.name])

    /**
     * Функция для рендеринга карточки автомобиля и состояния её загрузки.
     * @returns {JSX.Element} - Карточка автомобиля или состояние её загрузки.
     */
    const renderContent = () => {
        if (isLoading) {
            return <p>Загрузка...</p>;
        } else if (error) {
            return <p><pre className={styles.text}>{error}</pre></p>;
        } else if (!car.name) {
            return <p>Автомобиль не найден</p>;
        } else {
            return <CarCard car={car} />;
        }
    }

    return (
    <div>
        <Helmet>
            <title>Страница автомобиля</title>
        </Helmet>
        <Link to={`/#car-${car.id}`}>
            <img src="/img/buttons/back-arrow.svg" alt="Back" className={styles.backArrow} />
        </Link>
        {renderContent()}
    </div>
    )
}

export default CarDetail
