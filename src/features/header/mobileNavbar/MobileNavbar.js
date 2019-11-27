import React from "react";
import { Dropdown, Icon, Menu, Segment, DropdownItem } from "semantic-ui-react";

// TODO: Update <Search> usage after its will be implemented

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
                <a href="/about/board">Board of Directors</a>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>

          <DropdownItem>
            Services
            <Dropdown.Menu>
              <Dropdown.Item>
                <a href="/services/classes">Curriculum</a>
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
