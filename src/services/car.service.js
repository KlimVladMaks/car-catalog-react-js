//* Файл с сервисами (логикой веб-приложения)

// Импорты библиотек
import axios from "axios"

// Экспортируемый сервис с логикой работы с данными об автомобилях
export const CarService = {

    // Функция для получения данных о всех автомобилях с сервера
    async getAll() {

        // Получаем ответ от сервера с данными об автомобилях
        const response = await axios.get('http://localhost:3000/cars')

        // Возвращаем полученные данные
        return response.data
    },

    // Функция для получения данных об автомобиле по его id
    async getById(id) {

        // Получаем ответ от сервера с данными об автомобиле с искомым id
        const response = await axios.get(`http://localhost:3000/cars?id=${id}`)

        // Возвращаем полученные данные об автомобиле
        return response.data[0]
    },

    // Функция для добавления автомобиля в базу данных
    async addNew(carData) {

        // Отправляем и добавляем данные об автомобиле на сервер
        await axios.post('http://localhost:3000/cars', carData)
    },

    //TODO
    // Функция для удаления автомобиля из базы данных по его id
    async delById(id) {
        return id;
    }
}
