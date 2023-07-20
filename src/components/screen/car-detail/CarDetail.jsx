// Импорты библиотек
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// Импорты файлов
import { CarService } from "../../../services/car.service"
import CarItem from "../home/car-item/CarItem"

// Функциональный компонент со страницей отдельной машины
const CarDetail = () => {

    // Получаем id искомой машины (берём из искомого пути маршрутизации)
    const {id} = useParams()

    // Создаём хук для отслеживания данных о конкретном автомобиле
    const [car, setCar] = useState({})

    // Создаём хук, вызываемый при изменении id
    useEffect(() => {
        
        // Если id нет, то завершаем выполнение хука
        if (!id) return

        // Функция для получения данных об автомобиле
        const fetchData = async () => {
            
            // Получаем данные об автомобиле по его id
            const data = await CarService.getById(id);

            // Записываем полученные данные об автомобиле
            setCar(data)
        }

        // Вызываем функцию для получения данных об автомобиле
        fetchData()

    }, [id])

    // Если машины нет (т.е. у неё не задано имя), то выводим соответствующее сообщение
    if (!car?.name) return <p>Автомобиль не найден</p>

    // Возвращаем разметку компонента
    return (
    <div>

        {/* Карточка с автомобилем */}
        <CarItem car={car}/>

    </div>
    )
}

// Экспортируем компонент
export default CarDetail
