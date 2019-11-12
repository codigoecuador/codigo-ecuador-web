import React from "react";
import { Menu, Segment } from "semantic-ui-react";

const CodingMenu = props => {
  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name="Students"
          active={props.showing === "Student"}
          onClick={props.handleClick}
        />
        <Menu.Item
          name="Parents"
          active={props.showing === "Parent"}
          onClick={props.handleClick}
        />
        <Menu.Item
          name="Educators"
          active={props.showing === "Educator"}
          onClick={props.handleClick}
        />
        <Menu.Item
          name="Entrepeneurs"
          active={props.showing === "Entrepeneur"}
          onClick={props.handleClick}
        />
      </Menu>
    </div>
  );
};

export default CodingMenu;
