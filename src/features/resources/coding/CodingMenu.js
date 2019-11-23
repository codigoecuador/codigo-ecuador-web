import React from "react";
import { Menu } from "semantic-ui-react";

const CodingMenu = props => {
  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name='Students'
          active={props.showing === "Student"}
          onClick={() => props.handleMobileClick("Student")}
          value='Student'
        />
        <Menu.Item
          name='Parents'
          active={props.showing === "Parent"}
          onClick={() => props.handleMobileClick("Parent")}
          value='Parent'
        />
        <Menu.Item
          name='Educators'
          active={props.showing === "Educator"}
          onClick={() => props.handleMobileClick("Educator")}
          value='Educator'
        />
        <Menu.Item
          name='Entrepeneurs'
          active={props.showing === "Entrepeneur"}
          onClick={() => props.handleMobileClick("Entrepeneur")}
          value='Entrepeneur'
        />
      </Menu>
    </div>
  );
};

export default CodingMenu;
