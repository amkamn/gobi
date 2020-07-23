import React from "react";
import { Dropdown } from "react-bootstrap";
function Header() {
  return (
    <header>
      <div className="top">
        <h2>Some text here</h2>
      </div>
      <div className="tool">
        <div className="search">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="search__search">
            <i className="fas fa-search"></i>
            <p>text here </p>
          </div>
        </div>
        <div className="logo">Logo here</div>
        <div className="me">
          <i className="far fa-heart"></i>
          <i className="fas fa-shopping-bag"></i>
        </div>
      </div>
      <div className="menu">
        <ul>
          <li>Menu1</li>
          <li>Menu2</li>
          <li>Menu3</li>
          <li>Menu4</li>
          <li>Menu5</li>
          <li>Menu6</li>
          <li>Menu9</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
