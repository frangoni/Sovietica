import React from "react";
import { addCategory, deleteCategory } from "../../store/action-creators/categories";
import { connect } from "react-redux";
import AdminCategories from "../components/AdminCategories"

const mapStateToProps = function (state) {
    return {
        categories: state.categories.categories
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        addCategory: (data) => dispatch(addCategory(data)),
        deleteCategory: (id) => dispatch(deleteCategory(id))
    };
};

class AdminCategoriesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            imagen: ""
        }

        this.handleFoto = this.handleFoto.bind(this)
        this.handleNombre = this.handleNombre.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.deleteCategory=this.deleteCategory.bind(this)
    }

    componentDidMount() {
        this.props.addCategory()
    }


    handleSubmit(e) {
        e.preventDefault()
        console.log("event", e)
        this.props.addCategory({ nombre: this.state.nombre, foto: this.state.foto })
    }

    handleFoto(e) {
        let foto = e.target.value
        this.setState({ foto: foto })
    }

    handleNombre(e) {
        let nombre = e.target.value
        this.setState({ nombre: nombre })
    }

    deleteCategory(id){
      this.props.deleteCategory(id)
    }


    render() {
        return (
            <AdminCategories
                handleSubmit={this.handleSubmit}
                handleFoto={this.handleFoto}
                handleNombre={this.handleNombre}
                deleteCategory = {this.deleteCategory}
                categories={this.props.categories}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminCategoriesContainer);