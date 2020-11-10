import React from "react";
import { connect } from "react-redux";
import {
  fetchProducts,
  fetchProductsByCat,
} from "../../store/action-creators/products";

const mapStateToProps = function (state, ownProps) {
  console.log(state.categories.categories, "CATEGORIAS ");
  return {
    categorias: state.categories.categories,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchProductsByCat: (id) => dispatch(fetchProductsByCat(id)),
  };
};

class ToggledMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      toggle: false,
    };
  }

  handleClick(id) {
    this.props.fetchProductsByCat(id);
  }

  render() {
    return (
      <div>
        <div id="toggledMenu">
          <h5>
            <b>Categorias</b>
          </h5>
          {this.props.categorias.map((categoria) => {
            return (
              <button onClick={() => this.handleClick(categoria._id)}>
                {categoria.nombre}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggledMenu);
