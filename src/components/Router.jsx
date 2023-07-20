//* Файл для маршрутизации веб-приложения

// Импорты библиотек
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screen/home/Home"
import CarDetail from "./screen/car-detail/CarDetail"

// Роутер для маршрутизации веб-приложения
const Router = () => {

    // Возвращаем разметку маршрутизации
    return <BrowserRouter>

        {/* Блок со страницами */}
        <Routes>

            {/* Главная (домашняя) страница */}
            <Route element={<Home />} path='/' />

            {/* Страница отдельной машины */}
            <Route element={<CarDetail />} path='/car/:id' />

            {/* Сообщение, если страницы с искомым путём не найдено */}
            <Route path='*' element={<div>
                Страница не найдена
            </div>} />

        </Routes>

    </BrowserRouter>
}

// Экспортируем созданный роутер
export default Router
