import React from 'react';
import CommentListItem from './CommentListItem';

const CommentList = (props) => {
  const { comments } = props;
  let showComments = null;
  const commentItems = comments.reverse().map((item, index) => <CommentListItem key={index} {...item} />);
  showComments = comments.length > 0 ? commentItems : null;
  return (
    <div className="comment-list">
      <div className="media">
        <div className="media-content">
          {showComments}
        </div>
      </div>
    </div>
  )
};

export default CommentList;
