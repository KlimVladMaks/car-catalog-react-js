/* eslint-disable react/prop-types */

const ImageInputField = ({
    inputData,
    handleInputChange,
}) => {
    return (
        <input placeholder="Изображение автомобиля"
               name='image'
               onChange={handleInputChange}
               value={inputData.image} />
    );
}

export default ImageInputField;
