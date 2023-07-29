import { useEffect, useState } from 'react'
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

  /**
   * Хук для обновления массива автомобилей при монтировании компонента.
   */
  useEffect(() => {

    const fetchData = async () => {
      const data = await CarService.getAll()
      setCars(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Каталог автомобилей</h1>
      <CreateCarForm cars={cars} setCars={setCars} />
      <div>
        {cars.length ? [...cars].reverse().map(car =>
          (<CarItem key={car.id} car={car} />)
        )
          : (<p className={styles.text}>Автомобилей пока нет</p>)
        }
      </div>
    </div>
  )
}

export default Home
