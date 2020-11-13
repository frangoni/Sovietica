import React from "react";
import { Navbar, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function ({
  handleSubmit,
  handleChange,
  value,
  user,
  handleLogout,
  handleToggle,
  toggle,
}) {
  const classes = useStyles();
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
          <Nav.Link>
            <HamburgerMenu
              isOpen={toggle}
              menuClicked={handleToggle}
              width={23}
              height={16}
              strokeWidth={1}
              rotate={0}
              color={"black"}
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
                {user.rol == "admin" ? (
                  <NavDropdown.Item>
                    <Link to="/adminorders">Ordenes de compra</Link>
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
                  LOG IN
                </Link>
              </Nav.Link>

              <Nav.Link className="text-dark">
                <Link to={"/register"} className="text-dark ">
                  REGISTER
                </Link>
              </Nav.Link>
            </Nav>
          )}
        </Nav>
        <Nav.Link>
          <Link to={"/home"} className="text-dark">
            HOME
          </Link>
        </Nav.Link>

        <form
          onSubmit={handleSubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            className={classes.root}
            noValidate
            autoComplete="off"
            type="text"
            placeholder="Pantalon APA"
            onChange={handleChange}
            value={value}
          />

          <Button type="submit" size="small" className={classes.margin}>
            SEARCH
          </Button>
          <IconButton>
            <ShoppingCartOutlinedIcon
              isOpen={toggle}
              menuClicked={handleToggle}
            />
          </IconButton>
        </form>
      </Navbar>
    </div>
  );
}
