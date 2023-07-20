//* Main-файл для запуска веб-приложения

// Импорты библиотек
import React from 'react'
import ReactDOM from 'react-dom/client'

// Импорты файлов
import './assets/styles/global.css'
import Router from './components/Router'

// Запускаем функциональный компонент домашней страницы
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* Подключаем роутер для маршрутизации веб-приложения */}
    <Router />

  </React.StrictMode>,
)
