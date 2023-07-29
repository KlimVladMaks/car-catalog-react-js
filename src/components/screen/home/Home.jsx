import { useEffect, useState } from 'react'
import CarItem from './car-item/CarItem'
import CreateCarForm from './create-car-form/CreateCarForm'
import styles from './Home.module.css'
import { CarService } from '../../../services/car.service'

function Home() {

  const [cars, setCars] = useState([])

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
