/* eslint-disable react/prop-types */

import classNames from 'classnames';
import styles from './PriceInputField.module.css';
import fieldStyles from '../Fields.module.css';

const currencyOptions = ['₽', '$', '€', '¥'];

const PriceInputField = ({
    inputData,
    setInputData,
    handleInputChange,
    isPriceUsed,
    setIsPriceUsed,
    isPriceValid,
    setIsPriceValid,
}) => {

    const priceInputClasses = classNames(
        styles['price-input'],
        {
            [fieldStyles['input-error']]: isPriceUsed && !isPriceValid && inputData.price.trim() !== ''
        }
    )

    const handlePriceInputChange = (event) => {
        const value = event.target.value;
        const valueWithoutSpaces = value.replace(/\s/g, '');
        setIsPriceValid(+valueWithoutSpaces || value.trim() === '');
        setIsPriceUsed(true);
        handleInputChange(event);
    }

    const handleCurrencyChange = (event) => {
        setInputData({ ...inputData, currency: event.target.value });
    };

    return (
        <div className={fieldStyles['field-container']}>
            <div className={styles['price-container']}>
                <input placeholder="Цена автомобиля"
                    className={priceInputClasses}
                    name='price'
                    onChange={handlePriceInputChange} 
                    value={inputData.price}
                    id='price-input' />

                <select className={styles['price-select']} 
                        value={inputData.currency} 
                        onChange={handleCurrencyChange}>
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>

            <label htmlFor='price-input'>
                {(isPriceUsed && !isPriceValid && inputData.price.trim() !== '') && 
                <span className={fieldStyles['error-message']}>*Поле с ценой автомобиля должно содержать только цифры</span>}
            </label>
        </div>
    );
}

export default PriceInputField;
