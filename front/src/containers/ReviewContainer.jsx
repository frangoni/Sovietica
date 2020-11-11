import React from "react";
import { connect } from "react-redux";
import { fetchReview } from "../../store/action-creators/review";
import { fetchProduct } from "../../store/action-creators/productsActions";
import Review from "../components/Review";

class ReviewContainer extends React.Component {
  componentDidMount() {
    console.log(this.props.productId);
    this.props.fetchReview(this.props.productId);
    this.props.fetchProduct(this.props.productId);
  }

  render() {
    return <Review review={this.props.review} product={this.props.product} />;
  }
}

const mapStateToProps = (state, { match }) => {
  return {
    productId: match.params.id,
    review: state.review.reviews,
    product: state.products.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReview: (id) => dispatch(fetchReview(id)),
    fetchProduct: (id) => dispatch(fetchProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);
