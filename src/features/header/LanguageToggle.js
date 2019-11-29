import React from "react";
import { Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";

const languageOptions = [
  { key: "English", text: "English", value: "EN" },
  { key: "Spanish", text: "Spanish", value: "ES" }
];

const LanguageToggle = props => {
  const handleChange = (event, data) => {
    localStorage.setItem("language", data.value);
    props.setLanguage(data.value);
  };

  return (
    <Dropdown
      button
      className="icon"
      floating
      labeled
      icon="world"
      options={languageOptions}
      search
      text="Select Language"
      onChange={handleChange}
    />
  );
};

const mapStateToProps = state => {
  return { language: state.language };
};

const mapDispatchToProps = dispatch => ({
  setLanguage: language => dispatch({ type: "SET_LANGUAGE", language })
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageToggle);
