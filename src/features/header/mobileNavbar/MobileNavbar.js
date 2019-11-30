import React from "react";
import { Dropdown, Menu, DropdownItem } from "semantic-ui-react";

const MobileMenu = () => (
  <div className="mobile-menu">
    <Menu>
      <Dropdown item icon="list" simple>
        <Dropdown.Menu>
          <Dropdown.Item>
            About
            <Dropdown.Menu>
              <Dropdown.Item>
                <a href="/about">Our Story</a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/about/partners">Partners</a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/about/team">Team</a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/about/board">Board</a>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>

          <DropdownItem>
            Services
            <Dropdown.Menu>
              <Dropdown.Item>
                <a href="/services/classes">Classes</a>
              </Dropdown.Item>

              <Dropdown.Item>
                <a href="/services/mentorship">Mentorship</a>
              </Dropdown.Item>

              <Dropdown.Item>
                <a href="/services/internships">Internships</a>
              </Dropdown.Item>
            </Dropdown.Menu>
          </DropdownItem>

          <DropdownItem>
            <a href="/resources">Resources</a>
          </DropdownItem>

          <DropdownItem>
            <a href="/blog">Blog</a>
          </DropdownItem>

          <DropdownItem>
            <a href="/donate">Donate</a>
          </DropdownItem>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  </div>
);

export default MobileMenu;
