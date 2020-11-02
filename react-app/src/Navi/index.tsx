import React from 'react'
import { Navbar, Nav, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Bell } from '../common/components/SvgIcons'
import '../common/scss/components/logos.scss'
import style from './scss/navi.module.scss'
import HeadDropdown from './HeadDropdown'

function Navi() {
  return (
    <Navbar collapseOnSelect expand="lg" className={style.bar}>
      <Link to="/dashboard" className="logo-nav">
        <div className="logo logo-sm" />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="#notification">
            <Nav.Link className={style.bell}>
              <Bell />
            </Nav.Link>
          </LinkContainer>

          <Dropdown as={Nav.Link}>
            <Dropdown.Toggle id={style.dropdown} as={HeadDropdown}>
              <div className={style.headContain}>
                <img
                  src="/img/temp-head.jpg"
                  className={style.head}
                  alt="User profile icon dropdown"
                />
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight style={{ top: '2.5em' }}>
              <LinkContainer to="/logout">
                <Dropdown.Item>Logout</Dropdown.Item>
              </LinkContainer>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navi
