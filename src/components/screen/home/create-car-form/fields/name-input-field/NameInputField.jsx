/* eslint-disable react/prop-types */

import styles from '../Fields.module.css';

/**
 * Функциональный компонент для отображения формы ввода названия автомобиля.
 * @returns {JSX.Element} Форма ввода названия автомобиля.
 */
const NameInputField = ({
                        setIsNameValid,
                        setIsNameUsed,
                        handleInputChange,
                        data,
                        isNameUsed,
                        isNameValid,
                        }) => {

    /**
     * Функция для отслеживания ввода значения имени автомобиля.
     * @param {Event} event - Событие изменения имени автомобиля.
     * @returns {void}
     */
    const handleNameInputChange = (event) => {
        const {value} = event.target
        setIsNameValid(value.trim() !== '');
        setIsNameUsed(true);
        handleInputChange(event);
    }

    return (
        <div className={styles['field-container']}>
            <label htmlFor="name-input" className={styles['mandatory-label']}>
                *Обязательное поле
            </label>
            <input placeholder="Название автомобиля" 
                    name='name'
                    onChange={handleNameInputChange} 
                    value={data.name}
                    className={isNameUsed && !isNameValid ? styles['input-error'] : ''}
                    id='name-input' />
            <label htmlFor='name-input'>
                {(isNameUsed && !isNameValid) && 
                <span className={styles['error-message']}>*Поле с названием автомобиля не может быть пустым</span>}
            </label>
        </div>
    )
}

export default NameInputField;
