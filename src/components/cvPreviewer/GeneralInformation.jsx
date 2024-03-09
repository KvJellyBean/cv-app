import PropTypes from "prop-types";

function GeneralInformation({ data }) {
  let fullName, profession, address, phone, email;

  data.formInputs.forEach((input) => {
    switch (input.name) {
      case "fullName":
        fullName = input.value;
        break;
      case "profession":
        profession = input.value;
        break;
      case "address":
        address = input.value;
        break;
      case "phone":
        phone = input.value;
        break;
      case "email":
        email = input.value;
        break;
      default:
        break;
    }
  });

  return (
    <section className="generalInformation">
      <div className="personalInfo">
        {fullName && <h2 className="fullName">{fullName}</h2>}
        {profession && <p className="textInput">{profession}</p>}
      </div>
      <div className="personalInfo">
        {address && <p className="textInput">{address}</p>}
        {phone && <p className="textInput">{phone}</p>}
        {email && <p className="textInput">{email}</p>}
      </div>
    </section>
  );
}

GeneralInformation.propTypes = {
  data: PropTypes.object.isRequired,
};

export default GeneralInformation;
