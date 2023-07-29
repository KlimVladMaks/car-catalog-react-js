import axios from "axios"

/**
 * Сервисы для работы с автомобилями.
 */
export const CarService = {

    /**
     * Функция для получения данных обо всех автомобилях с сервера.
     * @returns {Array} - Массив с данными об автомобилях.
     */
    async getAll() {
        const response = await axios.get('http://localhost:3000/cars')
        return response.data
    },

    /**
     * Функция для получения информации о конкретном автомобиле по его id с сервера.
     * @param {number} id - id автомобиля.
     * @returns {Object} - Данные об автомобиле с заданным id.
     */
    async getById(id) {
        const response = await axios.get(`http://localhost:3000/cars?id=${id}`)
        return response.data[0]
    },

    /**
     * Функция для добавления нового автомобиля на сервер.
     * @param {Object} carData - Объект с данными о новом автомобиле.
     * @returns {void}
     */
    async addNew(carData) {
        await axios.post('http://localhost:3000/cars', carData)
    },

    //TODO
    async delById(id) {
        return id;
    }
}
