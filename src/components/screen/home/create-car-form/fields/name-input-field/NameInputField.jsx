/* eslint-disable react/prop-types */

import fieldStyles from '../Fields.module.css';

const NameInputField = ({
                        inputData,
                        handleInputChange,
                        isNameUsed,
                        setIsNameUsed,
                        isNameValid,
                        setIsNameValid,
                        }) => {

    const handleNameInputChange = (event) => {
        const {value} = event.target
        setIsNameValid(value.trim() !== '');
        setIsNameUsed(true);
        handleInputChange(event);
    }

    return (
        <div className={fieldStyles['field-container']}>
            <label htmlFor="name-input" className={fieldStyles['mandatory-label']}>
                *Обязательное поле
            </label>
            <input placeholder="Название автомобиля" 
                    name='name'
                    onChange={handleNameInputChange} 
                    value={inputData.name}
                    className={isNameUsed && !isNameValid ? fieldStyles['input-error'] : ''}
                    id='name-input' />
            <label htmlFor='name-input'>
                {(isNameUsed && !isNameValid) && 
                <span className={fieldStyles['error-message']}>*Поле с названием автомобиля не может быть пустым</span>}
            </label>
        </div>
    )
}

export default NameInputField;
