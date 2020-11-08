// comments reducer
const commentsReducerDefaultState = {
  items: []
};

export default (state = commentsReducerDefaultState, action) => {
  switch (action.type) {
    case 'START_SET_COMMENT_ITEMS':
      return {
        items: [...action.comments]
      };
    case 'START_ADD_NEW_COMMENT':
      return {
        items: [...state.items, action.comment]
      }
    default:
      return state;
  }
};