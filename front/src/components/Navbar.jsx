import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
import { useState } from "react";

export default ({
  handleSubmit,
  handleChange,
  value,
  user,
  handleLogout,
  handleToggle,
  toggle,
}) => {
  const [scroll, setScroll] = useState("first");

  const changeNav = () => {
    if (window.scrollY >= 50) {
      setScroll("second");
    } else {
      setScroll("first");
    }
  };
  window.addEventListener("scroll", changeNav);

  return (
    <div>
      <Navbar className={scroll} bg="light" variant="light">
        <Nav className="mr-auto">
          <Nav.Link>
            <HamburgerMenu
              isOpen={toggle}
              menuClicked={handleToggle}
              width={23}
              height={16}
              strokeWidth={1}
              rotate={0}
              color={"fuchsia"}
              animationDuration={0.5}
              borderRadius={0}
            />
          </Nav.Link>
          {user._id ? (
            <Nav className="text-dark">
              <NavDropdown
                title={user.nombre}
                id="basic-nav-dropdown"
                className="text-dark"
              >
                {user.rol == "admin" ? (
                  <>
                    <NavDropdown.Item>
                      <Link to="/adminusers" className="text-dark">
                        Users
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/adminaddproducts" className="text-dark">
                        Añadir Products
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/adminaddstock" className="text-dark">
                        Añadir Stock
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/admineditproducts" className="text-dark">
                        {" "}
                        Editar Productos
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/admineditstock" className="text-dark">
                        {" "}
                        Editar Stock{" "}
                      </Link>
                    </NavDropdown.Item>
                  </>
                ) : (
                  <>
                    <NavDropdown.Item>
                      <Link to="/cart" className="text-dark">
                        Carrito
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                      <Link to="/orders">Ordenes</Link>
                    </NavDropdown.Item>
                  </>
                )}

                {user.rol == "admin" ? (
                  <NavDropdown.Item>
                    <Link to="/admin">Panel</Link>
                  </NavDropdown.Item>
                ) : null}

                {user.rol == "admin" ? (
                  <NavDropdown.Item>
                    <Link to="/admincategories">Categorias</Link>
                  </NavDropdown.Item>
                ) : null}

                <NavDropdown.Divider />

                <NavDropdown.Item>
                  <p onClick={handleLogout}> Log Out </p>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link className="text-dark">
                <Link to={"/login"} className="text-dark">
                  Log In
                </Link>
              </Nav.Link>

              <Nav.Link className="text-dark">
                <Link to={"/register"} className="text-dark ">
                  Register
                </Link>
              </Nav.Link>
            </Nav>
          )}
        </Nav>
        <Nav.Link>
          <Link to={"/home"} className="text-dark">
            Home
          </Link>
        </Nav.Link>

        <Form onSubmit={handleSubmit} inline>
          <FormControl
            type="text"
            placeholder="Buscar Prenda"
            className="mr-sm-3 "
            onChange={handleChange}
            value={value}
          />
          <Button type="submit" variant="dark">
            Search
          </Button>
        </Form>
      </Navbar>
    </div>
  );
};
