import { useState } from 'react'
import Helmet from 'react-helmet'
import CreateCarForm from './create-car-form/CreateCarForm'
import CarList from './car-list/CarList'
import CarSortBox from './car-sort-box/CarSortBox'

/**
 * Функциональный компонент для отображения домашней страницы с каталогом автомобилей.
 * @returns {JSX.Element} - Домашняя страница с каталогом автомобилей.
 */
function Home() {

  const [cars, setCars] = useState([]);

  return (
    <div>
      <Helmet>
            <title>Каталог автомобилей</title>
      </Helmet>
      <h1>Каталог автомобилей</h1>
      <CreateCarForm cars={cars} setCars={setCars} />
      <CarSortBox cars={cars} setCars={setCars} />
      <CarList cars={cars} setCars={setCars} />
    </div>
  )
}

export default Home;
