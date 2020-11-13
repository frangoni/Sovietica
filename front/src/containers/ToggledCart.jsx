import React from "react";
import { connect } from "react-redux";
import { fetchCart, updateCart } from "../../store/action-creators/cart";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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
}));

class ToggledCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: true,
      value: "",
      toggle: false,
    };
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  componentDidMount() {
    this.props.fetchCart();
  }
  handleRefresh() {
    this.setState((prevState) => ({
      refresh: !prevState.refresh,
    }));
  }

  handleClick(id) {
    this.props.fetchProductsByCat(id);
  }

  render() {
    const classes = useStyles();
    return (
      <div>
        <div id="toggledCart">
          <p>
            {this.props.products.map((products) => {
              return (
                <Link onClick={() => this.handleClick(product._id)}>
                  <p>{product.nombre}</p>
                </Link>
              );
            })}
          </p>
          <Link to={"/cart"}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="small"
              style={{ backgroundColor: "lightpink" }}
              className={classes.margin}
            >
              IR A CARRITO
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchCart()),

    updateCart: (id, n) => dispatch(updateCart(id, { cantidad: n })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggledCart);
