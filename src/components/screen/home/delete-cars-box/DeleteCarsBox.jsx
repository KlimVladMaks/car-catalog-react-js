import styles from "./DeleteCarsBox.module.css"

/**
 * Функциональный компонент для отображения блока с кнопкой удаления всех автомобилей.
 * @returns {JSX.Element} - Блок с кнопкой удаления всех автомобилей.
 */
const DeleteCarsBox = () => {
    return (
        <div className={styles.container}>
            <button className="button del-button">Очистить список</button>
        </div>
    )
}

export default DeleteCarsBox;
