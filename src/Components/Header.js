import react, { Component } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
//import de Navlink pour link des pages
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const connected = this.props.connected
    if (connected !== "ok"){
    return (
      <div>
        <header>
          <Navbar className="customNavbar" sticky="top">
            <Container fluid>
              <NavLink className="nav-link" to="/"><Navbar.Brand href="#"> <img
                // alt="Logo de notre site en forme de feuille sur Animal Crossing"
                src="../images/tomNookLogoV2.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
                Nook's Cranny</Navbar.Brand></NavLink>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  {/*Navlink = <a> en html pour lier les pages */}
                  <NavLink className="nav-link" to="/products">Tous nos produits</NavLink>
                  <NavLink className="nav-link" to="/admin">Admin</NavLink>
                </Nav>
                <Nav className="research">
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Table grenouille"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Rechercher</Button>
                </Form>
                </Nav>
                <Nav>
                <NavLink className="nav-link" to="/login">Se connecter</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </div>
    );
    }else{
      return(
        <div>
        <header>
          <Navbar className="customNavbar" sticky="top">
            <Container fluid>
              <NavLink className="nav-link" to="/"><Navbar.Brand href="#"> <img
                // alt="Logo de notre site en forme de feuille sur Animal Crossing"
                src="../images/tomNookLogoV2.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
                Nook's Cranny</Navbar.Brand></NavLink>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  {/*Navlink = <a> en html pour lier les pages */}
                  <NavLink className="nav-link" to="/products">Tous nos produits</NavLink>
                  <NavLink className="nav-link" to="/admin">Admin</NavLink>
                </Nav>
                <Nav className="research">
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Table grenouille"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Rechercher</Button>
                </Form>
                </Nav>
                <Nav>
                <NavLink className="nav-link" to="/">Se déconnecter</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </div> 
      )
    }
  }
}

export default Header;
