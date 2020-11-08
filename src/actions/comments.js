import axios from 'axios';

export const startSetCommentItems = (comments) => ({
  type: 'START_SET_COMMENT_ITEMS',
  comments
});

export function addNewComment(comment) {
  return (dispatch) => {
    const userToken = localStorage.getItem('user_token')
    const options = {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`
      }
    }
    return axios
      .post('http://backend.sas.co.nz/api/orders/comments', comment, options)
      .then(response => dispatch(startAddNewComment(response.data.data)))
  }
};

export const startAddNewComment = (
  {
    orderId,
    comments,
    added_by_name,
    added_by_email
  }) => ({
    type: 'START_ADD_NEW_COMMENT',
    comment: {
      orderId,
      comments,
      added_by_name,
      added_by_email
    }
  });