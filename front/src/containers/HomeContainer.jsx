import React from "react";
import { fetchProducts } from "../../store/action-creators/products";
import { connect } from "react-redux";
import SearchContainer from "./SearchContainer";
import CategoriesContainer from "./CategoriesContainer";

const mapStateToProps = function (state) {
  return {
    products: state.products.products,
    user: state.user.user,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div id="home">
        <h4 className="titles">CATEGORIAS</h4>
        <hr />
        <CategoriesContainer />
        <h4 className="titles">PRODUCTOS</h4>
        <hr />
        <SearchContainer />
        <div id="iframe">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.429244160291!2d-58.43488518426759!3d-34.59330578046219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca763ed677c7%3A0xa05a16527aefac52!2sLerma%20581%2C%20C1414%20AZK%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1605218216417!5m2!1ses-419!2sar"
            width="800"
            height="600"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <h2>Veni a visitarnos a nuestro Showroom!</h2>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
