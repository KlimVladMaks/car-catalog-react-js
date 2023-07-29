import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screen/home/Home"
import CarDetail from "./screen/car-detail/CarDetail"

const Router = () => {

    return <BrowserRouter>
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<CarDetail />} path='/car/:id' />
            <Route path='*' element={<div>
                Страница не найдена
            </div>} />
        </Routes>
    </BrowserRouter>
}

export default Router
