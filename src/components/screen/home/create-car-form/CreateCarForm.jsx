/* eslint-disable react/prop-types */

import { useState } from 'react'
import styles from './CreateCarForm.module.css'
import { CarService } from '../../../../services/car.service'
import NameInputField from './fields/name-input-field/NameInputField'
import PriceInputField from './fields/price-input-field/PriceInputField'
import ImageInputField from './fields/image-input-field/ImageInputField'
import LinkInputField from './fields/link-input-field/LinkInputField'
import PreviewCard from './preview-card/PreviewCard'

const clearInputData = {
    name: '',
    price: '',
    image: '',
    currency: '₽',
    link: '',
}

const CreateCarForm = ({cars, setCars}) => {

    const [inputData, setInputData] = useState(clearInputData)

    const [isNameValid, setIsNameValid] = useState(false);
    const [isNameUsed, setIsNameUsed] = useState(false);

    const [isPriceValid, setIsPriceValid] = useState(true);
    const [isPriceUsed, setIsPriceUsed] = useState(false);

    const getMaxId = (cars) => {
        return cars.reduce((max, car) => {
            return car.id > max ? car.id : max;
        }, 0);
    }

    const createCar = async (event) => {
        event.preventDefault()
        if (isNameValid && isPriceValid) {
            try {
                if (inputData.price) {
                    inputData.price = Number(inputData.price.replace(/\s/g, ''));
                }
                const newCar = await CarService.addNew({
                    id: getMaxId(cars) + 1,
                    ...inputData,
                })
                setCars([...cars, newCar]);
                setInputData(clearInputData);
                setIsNameValid(false);
                setIsNameUsed(false);
                setIsPriceValid(true);
                setIsPriceUsed(false);
            } catch (error) {
                alert("Не получилось добавить автомобиль. Обновите страницу или попробуйте позже.")
            }
        } else {
            setIsNameUsed(true);
            setIsPriceUsed(true);
        }
    }

    const handleInputChange = (event) => {
        let { name, value } = event.target;
        if (value.trim() === '') value = '';
        setInputData({ ...inputData, [name]: value });
    };

    return (
        <div>
            <form className={styles.form}>

                <NameInputField inputData={inputData}
                                handleInputChange={handleInputChange}
                                isNameUsed={isNameUsed}
                                setIsNameUsed={setIsNameUsed}
                                isNameValid={isNameValid}
                                setIsNameValid={setIsNameValid} />

                <PriceInputField inputData={inputData}
                                 setInputData={setInputData}
                                 handleInputChange={handleInputChange}
                                 isPriceUsed={isPriceUsed}
                                 setIsPriceUsed={setIsPriceUsed}
                                 isPriceValid={isPriceValid}
                                 setIsPriceValid={setIsPriceValid} />
                
                <ImageInputField inputData={inputData} 
                                 handleInputChange={handleInputChange} />

                <LinkInputField inputData={inputData} 
                                handleInputChange={handleInputChange} />

                <button className="button" onClick={e => createCar(e)}>Добавить</button>

            </form>
            {isNameValid && isPriceValid &&
            <PreviewCard inputData={inputData} />}
        </div>
    )
}

export default CreateCarForm
