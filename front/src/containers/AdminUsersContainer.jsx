import React from "react";
import { fetchUsers, updateUsers, deleteUsers} from "../../store/action-creators/admin";
import { connect } from "react-redux";
import AdminUsers from "../components/AdminUsers";

const mapStateToProps = function (state) {
  return { users: state.admin.users };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    updateUsers: (rol, id) => dispatch(updateUsers(rol, id)),
    deleteUsers: (id) => dispatch(deleteUsers(id))
  };
};

class AdminUsersContainer extends React.Component {

  constructor(props){
    super(props);
    this.state={
      rol: "",
    }

    this.handleEdit=this.handleEdit.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.deleteUsers=this.deleteUsers.bind(this)
  }

  componentDidMount(){
    this.props.fetchUsers()
  }

  handleEdit(e){
    const value = e.target.value;
    this.setState({
      rol: value,
    });
  }

  handleSubmit(id){
   this.props.updateUsers(id, this.state.rol)
  }

  deleteUsers(id){
    this.props.deleteUsers(id)
  }


  render() {
    return (
      <AdminUsers
      users={this.props.users}
      handleEdit={this.handleEdit}
      handleSubmit={this.handleSubmit}
      deleteUsers={this.deleteUsers}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( AdminUsersContainer );