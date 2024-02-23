import Button from "./Button";
import PropTypes from "prop-types";

function Header({ events }) {
  const navigation = ["Edit CV", "Preview CV", "Sample CV"];

  return (
    <header>
      <div className="logoContainer">
        <h1>Curriculify</h1>
      </div>

      <nav>
        <ul>
          {navigation.map((navText) => {
            return (
              <li key={navText}>
                {navText === "Sample CV" ? (
                  <Button
                    title={navText}
                    className="outlinedButton"
                    onPress={events.showSample}
                  ></Button>
                ) : (
                  <Button
                    title={navText}
                    className="emptyButton"
                    onPress={() => events.changePage(navText)}
                  ></Button>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  events: PropTypes.object.isRequired,
};

export default Header;
