import React from "react";
import "./Coding.css";
import { Button, Sticky } from "semantic-ui-react";
import { codingButtonsText } from "../../../common/resourcesText/codingButtonsText";

const CodingButtonGroup = props => {
  //grabs language from localStorage and select text from codingText object
  const { lang } = props;
  const buttons = codingButtonsText[lang];

  const renderButtons = buttons => {
    return buttons.map(b => (
      <button
        onClick={props.handleClick}
        className="coding-button"
        value={b.name}
      >
        {b.text}
      </button>
    ));
  };
  return (
    <Sticky>
      <div className="coding-button-group">
        <br />
        <br />
        <Button.Group vertical>
          {renderButtons(buttons)}
          <br />
          <br />
        </Button.Group>
      </div>
    </Sticky>
  );
};

export default CodingButtonGroup;
