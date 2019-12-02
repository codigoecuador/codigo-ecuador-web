import React from "react";
import { Menu } from "semantic-ui-react";
import { codingMenuText } from "../../../common/resourcesText/coding/codingMenuText";

const CodingMenu = props => {
  const { lang } = props;
  const renderMenuItems = codingMenuText => {
    return codingMenuText[lang].map(item => (
      <Menu.Item
        name={item}
        active={props.showing === item}
        onClick={() => props.handleMobileClick(item)}
        value={item}
      />
    ));
  };

  return (
    <div>
      <Menu pointing secondary className="mobile-coding-menu">
        {renderMenuItems(codingMenuText)}
      </Menu>
    </div>
  );
};

export default CodingMenu;
