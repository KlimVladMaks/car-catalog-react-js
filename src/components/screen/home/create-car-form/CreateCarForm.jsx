/* eslint-disable react/prop-types */

import { useState } from 'react'
import styles from './CreateCarForm.module.css'
import { CarService } from '../../../../services/car.service'

const clearData = {
    id: '',
    name: '',
    price: '',
    image: '',
}

// eslint-disable-next-line no-unused-vars
const CreateCarForm = ({cars, setCars}) => {

    const [data, setData] = useState(clearData)

    const createCar = (e) => {
        e.preventDefault()
        CarService.addNew({
            id: cars.length + 1,
            ...data,
        })
        setData(clearData)
    }

    return (
        <form className={styles.form}>
            <input placeholder="Название автомобиля" 
                   onChange={e => setData({...data, name: e.target.value})} 
                   value={data.name} />
            <input placeholder="Цена автомобиля"
                   onChange={e => setData({...data, price: e.target.value})} 
                   value={data.price} />
            <input placeholder="Изображение автомобиля"
                   onChange={e => setData({...data, image: e.target.value})}
                   value={data.image} />
            <button className="button" onClick={e => createCar(e)}>Добавить</button>
        </form>
    )    
}

export default CreateCarForm
