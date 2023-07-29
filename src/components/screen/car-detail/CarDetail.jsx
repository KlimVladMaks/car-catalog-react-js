import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CarService } from "../../../services/car.service"
import CarItem from "../home/car-item/CarItem"
import styles from "./CarDetail.module.css"

const CarDetail = () => {

    const {id} = useParams()
    const [car, setCar] = useState({})

    useEffect(() => {

        if (!id) return

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
