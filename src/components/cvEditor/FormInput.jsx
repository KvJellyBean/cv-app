import PropTypes from "prop-types";

function FormInput({
  input,
  index,
  inputs,
  formInputKey,
  data,
  datas,
  events,
}) {
  const handleInputChange = (e) => {
    const updatedInputs = inputs.map((item, idx) => {
      if (idx === index) {
        return { ...item, value: e.target.value };
      }
      return item;
    });

    events.changeData({
      ...datas,
      [data.dataKey]: {
        ...data,
        [formInputKey]: updatedInputs,
      },
    });
  };

  const handleFileChange = (e) => {
    const newInput = {
      ...input,
      value: URL.createObjectURL(e.target.files[0]),
    };
    const updatedInputs = inputs.map((item, idx) =>
      idx === index ? newInput : item
    );

    events.changeData({
      ...datas,
      [data.dataKey]: {
        ...data,
        [formInputKey]: updatedInputs,
      },
    });
    console.log(data);
  };

  return (
    <section className="inputWrapper">
      <label htmlFor={input.id + "_" + formInputKey}>{input.label}</label>
      {input.type !== "file" && (
        <input
          type={input.type}
          name={input.name}
          id={input.id + "_" + formInputKey}
          placeholder={input.placeholder}
          value={input.value}
          autoComplete="false"
          onChange={(e) => handleInputChange(e)}
        />
      )}

      {input.type === "file" && (
        <input
          type={input.type}
          name={input.name}
          id={input.id + "_" + formInputKey}
          accept="image/jpeg, image/png, image/jpg"
          onChange={(e) => handleFileChange(e)}
        />
      )}
    </section>
  );
}

FormInput.propTypes = {
  input: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  inputs: PropTypes.array.isRequired,
  formInputKey: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  datas: PropTypes.object.isRequired,
  events: PropTypes.object.isRequired,
};

export default FormInput;
