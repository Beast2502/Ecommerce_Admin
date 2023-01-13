import React,{Component} from "react";
import './dashBoard.css';


import { connect } from "react-redux";
import * as actions from '../../redux/actions';

import CommentList from "./CommentList";

class DashBorad extends Component {
  state ={comment : ''};
  
  handleChange = event =>{
    this.setState({comment : event.target.value});
  };

  handleSubmit = event =>{
    event.preventDefault();
    console.log("Check the commnet" ,this.state.comment)
    this.props.saveComment(this.state.comment);
    this.setState({comment : ''})
  }

  render(){
    return(
      <>
      <form onSubmit={this.handleSubmit}>
        <h4>Add Comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment}></textarea>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <CommentList/>
      </>
    )
  }
};

export default connect(null,actions)(DashBorad);
