import axios from "axios"

export const CarService = {

    async getAll() {

        // Получаем ответ от сервера с данными об автомобилях
        const response = await axios.get('http://localhost:3000/cars')

        // Возвращаем полученные данные
        return response.data
    },

    async getById(id) {
        const response = await axios.get(`http://localhost:3000/cars?id=${id}`)
        return response.data[0]
    },

    async addNew(carData) {
        await axios.post('http://localhost:3000/cars', carData)
    },

    //TODO
    async delById(id) {
        return id;
    }
}
