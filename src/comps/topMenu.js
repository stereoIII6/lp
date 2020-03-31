import React, { useState } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
const TopMenu = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand href="/">
          <img src="logo.png" style={{ width: "80px" }} alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Die Duftmanufaktur</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://scentral.herokuapp.com" target="_blank">
                Scentral
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Kontakt
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="+49">Rufen Sie Uns an !</DropdownItem>
                <DropdownItem href="https://api.whatsapp.com/send?phone=+4917664085283&text=web&source=&data=web">
                  Schreiben Sie uns per WhatsApp
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="info@leparfumberlin.de">
                  Schreiben Sie uns eine eMail
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            <i className="fas fa-shopping-cart"></i>
          </NavbarText>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default TopMenu;
