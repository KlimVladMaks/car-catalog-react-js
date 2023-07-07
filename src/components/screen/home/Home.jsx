// Импорты
import styles from './Home.module.css'

// Функциональный компонент (независимый блок) для домашней страницы
function Home() {

    // Возвращаем разметку компонента
    return (
  
      // Разметка компонента
      <div>
  
        {/* Заголовок */}
        <h1>Car catalog</h1>

        {/* Блок с карточками машин */}
        <div>

            {/* Карточка машины */}
            <div className={styles.item}>

                {/* Изображение машины */}
                <div className={styles.image}
                     style={{
                         backgroundImage: 'url(https://avtoaziya.ru/images/FOTO/25/BMW_3_Series_2023-6.jpg)'
                     }}/>

                {/* Блок с информацией о машине */}
                <div className={styles.info}>

                    {/* Название машины */}
                    <h2>Car 1</h2>

                    {/* Цена машины */}
                    <p>$100 000</p>

                    {/* Кнопка для перехода к подробному описанию */}
                    <button>Read more</button>

                </div>

            </div>

        </div>
  
      </div>
  
    )
  }
  
  // Экспортируем функциональный компонент для домашней страницы
  export default Home
  