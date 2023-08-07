import { useEffect, useState } from 'react'
import React from 'react'
import Helmet from 'react-helmet'
import CarItem from './car-item/CarItem'
import CreateCarForm from './create-car-form/CreateCarForm'
import styles from './Home.module.css'
import { CarService } from '../../../services/car.service'

/**
 * Функциональный компонент для отображения домашней страницы с каталогом автомобилей.
 * @returns {JSX.Element} - Домашняя страница с каталогом автомобилей.
 */
function Home() {

  const [cars, setCars] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const MemoizedCreateCarForm = React.memo(CreateCarForm);
  const MemoizedCarItem = React.memo(CarItem);

  /**
   * Хук для обновления массива автомобилей при монтировании компонента.
   */
  useEffect(() => {

    /**
     * Функция для получения и задания данных о всех автомобилях.
     * @returns {void}
     */
    const fetchData = async () => {
      try {
        const data = await CarService.getAll();
        setCars(data);
      } catch {
        setError("Не удалось получить данные об автомобилях.\nОбновите страницу или попробуйте позже.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [])

  return (
    <div>
      <Helmet>
            <title>Каталог автомобилей</title>
      </Helmet>
      <h1>Каталог автомобилей</h1>
      <MemoizedCreateCarForm cars={cars} setCars={setCars} />
      <div>
        {isLoading ? (
          <p className={styles.text}>Загрузка...</p>
        ) : error ? (
          <p><pre className={styles.text}>{error}</pre></p>
        ) : cars.length ? [...cars].reverse().map(car =>
          (<MemoizedCarItem key={car.id} car={car} cars={cars} setCars={setCars} />)
        )
          : (<p className={styles.text}>Автомобилей пока нет</p>)
        }
      </div>
    </div>
  )
}

export default Home
