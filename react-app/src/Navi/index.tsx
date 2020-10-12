import React from 'react'
import { Navbar, Nav, Dropdown, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Bell } from '../common/components/SvgIcons'
import '../common/scss/components/logos.scss'
import HeadDropdown from './HeadDropdown'
import style from './scss/navi.module.scss'

function Navi() {
  return (
    <Navbar expand="lg" className={style.bar}>
      <Link to="/dashboard" className="logo-nav">
        <div className="logo logo-sm" />
      </Link>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar" className="pl-3">
        <Nav className="ml-auto">
          <Col>
            <Link to="/dashboard" className={style.navLink}>
              Dashboard
            </Link>
          </Col>
          <Col>
            <Link to="#notification" className={style.bell}>
              <Bell />
            </Link>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle id={style.dropdown} as={HeadDropdown}>
                <div className={style.headContain}>
                  <img
                    src="/img/temp-head.jpg"
                    className={style.head}
                    alt="User profile icon dropdown"
                  />
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight style={{ top: '1.5em', zIndex: -1 }}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navi
