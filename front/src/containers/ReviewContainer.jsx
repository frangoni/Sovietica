import React from "react";
import { connect } from "react-redux";
import { fetchReview, addReview } from "../../store/action-creators/review";
import { fetchProduct } from "../../store/action-creators/productsActions";
import Review from "../components/Review";

class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 3,
    };
    this.handleReview = this.handleReview.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  componentDidMount() {
    this.props.fetchReview(this.props.productId);
    this.props.fetchProduct(this.props.productId);
  }

  handleReview(e) {
    e.preventDefault();
    let review = e.target[0].value;
    let data = {
      review,
      calificacion: this.state.rating,
    };
    addReview(this.props.productId, data);
    this.props.history.goBack();
  }

  handleRating(value) {
    this.setState({
      rating: value,
    });
  }

  render() {
    return (
      <Review
        review={this.props.review}
        product={this.props.product}
        handleReview={this.handleReview}
        handleRating={this.handleRating}
        rating={this.state.rating}
      />
    );
  }
}

const mapStateToProps = (state, { match, history }) => {
  return {
    productId: match.params.id,
    review: state.review.reviews,
    product: state.products.product,
    history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReview: (id) => dispatch(fetchReview(id)),
    fetchProduct: (id) => dispatch(fetchProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);
