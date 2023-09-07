/* eslint-disable react/prop-types */

const LinkInputField = ({
    inputData,
    handleInputChange,
}) => {
    return (
        <input placeholder='Сайт автомобиля'
               name='link'
               onChange={handleInputChange}
               value={inputData.link} />
    );
}

export default LinkInputField;
