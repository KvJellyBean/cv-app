import PropTypes from "prop-types";

function ShortFormDisplay({ title, data }) {
  const inputs = Object.keys(data)
    .filter((key) => key.startsWith("formInputs"))
    .map((key) => data[key]);

  return (
    <section className="shortForm">
      <h3 className="subtitle">{title}</h3>
      <hr />

      <ul>
        {inputs.map((input, index) => (
          <li key={index}>{input[0].value}</li>
        ))}
      </ul>
    </section>
  );
}

ShortFormDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default ShortFormDisplay;
