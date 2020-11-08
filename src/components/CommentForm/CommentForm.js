import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewComment } from '../../actions/comments';

import Button from '../Button/Button';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: String(props.orderId),
      comments: '',
      added_by_name: props.name,
      added_by_email: props.email
    }
  };

  handleOnChangeComments = e => {
    const comments = e.target.value;
    this.setState({ comments })
  };

  handleOnSubmitComment = e => {
    e.preventDefault();
    const { orderId, comments, added_by_name, added_by_email } = this.state;
    const data = {
      orderId,
      comments,
      added_by_name,
      added_by_email
    }
    this.props.addNewComment(data)
    this.setState({comments: ''})
  };

  render() {
    const { comments } = this.state;
    return (
      <div className="comment-form">
        <form onSubmit={this.handleOnSubmitComment}>
          <div className="field">
            <div className="control">
              <textarea
                className="textarea is-small"
                placeholder="Comment..."
                value={comments}
                onChange={this.handleOnChangeComments}
              >
              </textarea>
            </div>
          </div>
          <Button styleClass="is-black">Post Comment</Button>
        </form>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  orderId: state.orders.order.merchOrderId,
  name: state.auth.user.name,
  email: state.auth.user.email
});

const mapDispatchToProps = (dispatch) => ({
  addNewComment: (data) => dispatch(addNewComment(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
