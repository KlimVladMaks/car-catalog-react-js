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
     * @returns {Object} - Данные добавленного автомобиля.
     */
    async addNew(carData, maxAttempts = 3, delay = 1000) {
        let attempts = 0;
        while (attempts < maxAttempts) {
            try {
                await axios.post('http://localhost:3000/cars', carData)
                return carData;
            } catch (error) {
                attempts++;
                if (attempts === maxAttempts) {
                    throw error;
                }
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    },

    /**
     * Функция для удаления автомобиля из базы данных по его id.
     * @param {number} id - id автомобиля, который нужно удалить.
     * @param {number} maxAttempts - Максимальное количество попыток отправки запроса на удаление на сервер.
     * @param {number} delay - Задержка между попытками.
     */
    async delById(id, maxAttempts = 3, delay = 1000) {
        let attempts = 0;
        while (attempts < maxAttempts) {
            try {
                await axios.delete(`http://localhost:3000/cars/${id}`);
                return;
            } catch (error) {
                attempts++;
                if (attempts === maxAttempts) {
                    throw error;
                }
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    },
}
