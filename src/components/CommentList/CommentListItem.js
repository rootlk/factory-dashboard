import React from 'react';
import moment from 'moment';

const CommentListItem = (props) => {
  const { added_by_name, comments, created_at } = props;
  return (
    <div className="content comment-list-item">
      <div>
        <strong className="comment-name">{added_by_name}</strong>
        <small>{moment(created_at).format("MMM Do YY")}</small>
        <br />
        <p className="comment-text">{comments}</p>
      </div>
    </div>
  )
};

export default CommentListItem;