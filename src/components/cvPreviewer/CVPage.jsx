import PropTypes from "prop-types";
import GeneralInformation from "./GeneralInformation";
import LongFormDisplay from "./LongFormDisplay";
import ShortFormDisplay from "./ShortFormDisplay";

function CVPage({ datas, inputRef }) {
  return (
    <div id="cvPage" ref={inputRef}>
      <div id="mainCV">
        <GeneralInformation
          data={datas.General_Information}
        ></GeneralInformation>

        <LongFormDisplay
          title="Work Experience"
          data={datas.Work_Experience}
        ></LongFormDisplay>

        <LongFormDisplay
          title="Education"
          data={datas.Education}
        ></LongFormDisplay>

        <ShortFormDisplay title="Skills" data={datas.Skills}></ShortFormDisplay>
      </div>

      <div id="sideCV">
        <div className="profilePicture">
          <img
            src={datas.Profile_Picture.formInputs_1[0].value}
            alt="CV Profile Picture"
            className="profile-pic"
          />
        </div>

        <section className="profileSummary">
          <h3 className="subtitle">About Me</h3>
          <hr />
          <p>{datas.General_Information.formInputs_1[5].value}</p>
        </section>

        <ShortFormDisplay
          title="Languages"
          data={datas.Languages}
        ></ShortFormDisplay>
      </div>
    </div>
  );
}

CVPage.propTypes = {
  datas: PropTypes.object.isRequired,
  inputRef: PropTypes.shape({
    current: PropTypes.any,
  }),
};

export default CVPage;
