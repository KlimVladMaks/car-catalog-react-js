/* eslint-disable react/prop-types */

const LinkInputField = ({
    inputData,
    handleInputChange,
}) => {
    return (
        <input placeholder='Ссылка на сайт автомобиля'
               name='link'
               onChange={handleInputChange}
               value={inputData.link} />
    );
}

export default LinkInputField;
