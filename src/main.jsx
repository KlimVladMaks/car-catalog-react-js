//* Main-файл для запуска веб-приложения

// Импорты
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/screen/home/Home.jsx'
import './assets/styles/global.css'

// Запускаем функциональный компонент домашней страницы
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
