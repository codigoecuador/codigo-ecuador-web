import React from "react";
import { connect } from "react-redux";
import { Dropdown, Menu, DropdownItem } from "semantic-ui-react";
import { navbarText } from "../../../common/navbarText";

const MobileNavbar = () => {
  let lang = localStorage.getItem("language");

  return (
    <div className="mobile-menu">
      <Menu>
        <Dropdown item icon="list" simple>
          <Dropdown.Menu>
            <Dropdown.Item>
              {navbarText[lang].about}
              <Dropdown.Menu>
                <Dropdown.Item>
                  <a href="/about">{navbarText[lang].ourStory}</a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a href="/about/partners">{navbarText[lang].partners}</a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a href="/about/team">{navbarText[lang].team}</a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a href="/about/board">{navbarText[lang].board}</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>

            <DropdownItem>
              {navbarText[lang].services}
              <Dropdown.Menu>
                <Dropdown.Item>
                  <a href="/services/classes">{navbarText[lang].classes}</a>
                </Dropdown.Item>

                <Dropdown.Item>
                  <a href="/services/internships">
                    {navbarText[lang].internships}
                  </a>
                </Dropdown.Item>

                <Dropdown.Item>
                  <a href="/services/mentorship">
                    {navbarText[lang].mentorship}
                  </a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </DropdownItem>

            <DropdownItem>
              <a href="/resources">{navbarText[lang].resources}</a>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <a href="/resources/coding">{navbarText[lang].coding}</a>
                </Dropdown.Item>

                <Dropdown.Item>
                  <a href="/resources/research">{navbarText[lang].research}</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </DropdownItem>

            <DropdownItem>
              <a href="/blog">{navbarText[lang].blog}</a>
            </DropdownItem>

            <DropdownItem>
              <a href="/donate">{navbarText[lang].donate}</a>
            </DropdownItem>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </div>
  );
};

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(MobileNavbar);
