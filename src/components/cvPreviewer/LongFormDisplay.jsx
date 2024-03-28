import { format } from "date-fns";
import PropTypes from "prop-types";

function LongFormDisplay({ title, data }) {
  const formInputKeys = Object.keys(data).filter((key) =>
    key.startsWith("formInputs")
  );

  return (
    <section className="longForm">
      <h3 className="subtitle">{title}</h3>
      <hr />

      <ul className="list">
        {formInputKeys.map((formInputKey, index) => {
          const input = data[formInputKey];
          const startDate = format(input[2].value, "MMM yyyy");
          const endDate = format(input[3].value, "MMM yyyy");
          return (
            <li key={index}>
              <h4 className="listTitle">{input[0].value}</h4>
              <p className="listSubtitle">{input[4].value}</p>
              <p className="listSubtitle">{startDate + " - " + endDate}</p>
              <p className="listSubtitle">{input[1].value}</p>
              <p className="listDescription">{input[5].value}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

LongFormDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default LongFormDisplay;
