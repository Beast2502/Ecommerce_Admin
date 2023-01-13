import React, { Component } from "react";
import {connect} from 'react-redux';

class CommentList extends Component{

    renderComments(){
        console.log("Methodddddd")
       return this.props.comments.map(comment =>{
            return <li key={comment}>{comment}</li>
        })
    }

    render(){
        console.log(this.props.comments ,"Check the comment")
        return (
            <div>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {comments : state.comments}
}

export default connect(mapStateToProps)(CommentList);
