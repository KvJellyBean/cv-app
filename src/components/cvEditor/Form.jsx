import PropTypes from "prop-types";
import FormCard from "./FormCard";
import Button from "../Button";
import educationForm from "../data/education";
import workExpForm from "../data/workExperience";
import skillForm from "../data/skill";
import languageForm from "../data/language";

function Form({ data, datas, events }) {
  const handleAddData = () => {
    if (!data.addButton) return;

    let newData;
    switch (data.dataKey) {
      case "Education":
        newData = educationForm;
        break;
      case "Work_Experience":
        newData = workExpForm;
        break;
      case "Skills":
        newData = skillForm;
        break;
      case "Languages":
        newData = languageForm;
        break;
      default:
        return;
    }

    const existingKeys = Object.keys(data).filter((key) =>
      key.startsWith("formInputs")
    ).length;
    const newKey = `formInputs_${existingKeys + 1}`;

    events.changeData({
      ...datas,
      [data.dataKey]: {
        ...data,
        [newKey]: newData,
      },
    });
  };

  return (
    <form className="form">
      {data.image !== null && (
        <>
          <div className="pictureContainer">
            <img
              src={datas.Profile_Picture.formInputs_1[0].value}
              alt="User Profile Picture"
              className="profile-pic"
            />
          </div>
          <div className="formProfile">
            <legend>{data.legend}</legend>
            <p className="description">{data.description}</p>
            {data["formInputs_1"] && (
              <FormCard
                key="formInputs_1"
                inputs={data["formInputs_1"]}
                formInputKey={"formInputs_1"}
                data={data}
                datas={datas}
                events={events}
              />
            )}
          </div>
        </>
      )}

      {data.image === null && (
        <>
          <div className="formHeader">
            <legend>{data.legend}</legend>
            {data.addButton && (
              <Button
                title={data.addButton.label}
                id={data.dataKey}
                className="fillButton"
                onPress={handleAddData}
              ></Button>
            )}
            <p className="description">{data.description}</p>
          </div>
          {Object.keys(data).map(
            (key, index) =>
              key.startsWith("formInputs") && (
                <FormCard
                  key={key + "_" + index}
                  inputs={data[key]}
                  formInputKey={key}
                  data={data}
                  datas={datas}
                  events={events}
                />
              )
          )}
        </>
      )}
    </form>
  );
}

Form.propTypes = {
  data: PropTypes.object.isRequired,
  datas: PropTypes.object.isRequired,
  events: PropTypes.object.isRequired,
};

export default Form;
