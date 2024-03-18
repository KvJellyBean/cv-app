import PropTypes from "prop-types";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import Button from "../Button";

function FormCard({ inputs, formInputKey, data, datas, events }) {
  const handleRemoveData = () => {
    const index = parseInt(formInputKey.split("_")[1]);
    delete data[formInputKey];

    // Move key formInputs one level
    for (let i = index + 1; i <= Object.keys(data).length; i++) {
      const currentKey = `formInputs_${i}`;
      const newKey = `formInputs_${i - 1}`;

      if (!data[currentKey]) continue;
      data[newKey] = data[currentKey];
      delete data[currentKey];
    }

    events.changeData({ ...datas, [data.dataKey]: data });
  };

  return (
    <section className="formBody">
      {inputs.map((input, inputIndex) => {
        return input.type !== "textarea" ? (
          <FormInput
            key={input.id + inputIndex}
            input={input}
            index={inputIndex}
            inputs={inputs}
            formInputKey={formInputKey}
            data={data}
            datas={datas}
            events={events}
          ></FormInput>
        ) : (
          <FormTextarea
            key={input.id + inputIndex}
            textarea={input}
            index={inputIndex}
            inputs={inputs}
            formInputKey={formInputKey}
            data={data}
            datas={datas}
            events={events}
          ></FormTextarea>
        );
      })}

      {/* Delete Button */}
      {["Education", "Work_Experience", "Skills", "Languages"].includes(
        data.dataKey
      ) ? (
        <Button
          title="Delete"
          className="deleteButton"
          onPress={handleRemoveData}
        ></Button>
      ) : null}
    </section>
  );
}

FormCard.propTypes = {
  inputs: PropTypes.array.isRequired,
  formInputKey: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  datas: PropTypes.object.isRequired,
  events: PropTypes.object.isRequired,
};

export default FormCard;
