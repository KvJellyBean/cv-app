import PropTypes from "prop-types";

function FormInput({
  textarea,
  index,
  inputs,
  formInputKey,
  data,
  datas,
  events,
}) {
  const handleTextareaChange = (e) => {
    const updatedTextarea = {
      ...textarea,
      value: e.target.value,
    };

    const updatedFormInputs = [...inputs];
    updatedFormInputs[index] = updatedTextarea;

    events.changeData({
      ...datas,
      [data.dataKey]: {
        ...data,
        [formInputKey]: updatedFormInputs,
      },
    });
  };

  return (
    <section className="inputWrapper">
      <label htmlFor={textarea.id + "_" + formInputKey}>{textarea.label}</label>
      <textarea
        name={textarea.name}
        id={textarea.id + "_" + formInputKey}
        value={textarea.value}
        placeholder={textarea.placeholder}
        onChange={handleTextareaChange}
      ></textarea>
    </section>
  );
}

FormInput.propTypes = {
  textarea: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  inputs: PropTypes.array.isRequired,
  formInputKey: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  datas: PropTypes.object.isRequired,
  events: PropTypes.object.isRequired,
};

export default FormInput;
