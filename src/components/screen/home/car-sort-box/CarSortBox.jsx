/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState, useCallback } from "react";
import styles from "./CarSortBox.module.css";

/**
 * Функциональный компонент для отображения блок с инструментами сортировки списка автомобилей.
 * @param {Array} cars - Массив автомобилей.
 * @returns {JSX.Element} - Блок с инструментами сортировки списка автомобилей.
 */
const CarSortBox = ({cars, setCars}) => {

    const [sort, setSort] = useState({ param: "id", order: "asc" });

    const setCarsCallback = useCallback(
        (sortedCars) => {
            setCars(sortedCars);
        },
        [setCars]
    );

    /**
     * Функция для отслеживания изменения значения параметра сортировки.
     * @param {Event} event - Событие изменения значения параметра сортировки.
     */
    const handleSortParamChange = (event) => {
        const param = event.target.value;
        setSort((prevSort) => ({ ...prevSort, param }));
    };

    /**
     * Функция изменения порядка сортировки.
     */
    const handleSortOrderChange = () => {
        setSort((prevSort) => ({
            ...prevSort,
            order: prevSort.order === "asc" ? "desc" : "asc",
        }));
    };

    useEffect(() => {
        const { param, order } = sort;
        const sortedCars = [...cars].sort((a, b) => {
        const aValue = a[param];
        const bValue = b[param];

        if (order === "asc") {
            if (aValue < bValue) return -1;
            if (aValue > bValue) return 1;
        } else if (order === "desc") {
            if (aValue > bValue) return -1;
            if (aValue < bValue) return 1;
        }

        return 0;
        });

        setCarsCallback(sortedCars);
    }, [sort, setCarsCallback]);

    return (
        <div className={styles.container}>
            <p className={styles.text}>Сортировать по</p>
            <select 
                value={sort.param} 
                onChange={handleSortParamChange} 
                className={styles['select-list']}
            >
                <option value="id">Дате добавления</option>
                <option value="name">Названию</option>
                <option value="price">Цене</option>
            </select>
            <button className={`${styles["select-button"]} button`} onClick={handleSortOrderChange}>
                <img 
                    src={sort.order === 'asc' 
                        ? "/img/buttons/sort-arrow-asc.svg" 
                        : "/img/buttons/sort-arrow-desc.svg"
                    }
                    alt="Sort arrow" 
                    className={styles['select-button-img']} 
                />
            </button>
        </div>
    );
}

export default CarSortBox
