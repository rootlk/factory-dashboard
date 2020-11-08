// products reducer
const productsReducerDefaultState = {
  items: []
};

export default (state = productsReducerDefaultState, action) => {
  switch (action.type) {
    case 'START_SET_PRODUCT_ITEMS':
      return {
        items: action.items
      };
    case 'START_UPDATE_ORDER_ITEM_TYPE':
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              item_type: action.item
            }
          } else {
            return item
          }
        })
      };
    case 'START_UPDATE_ORDER_ITEM_SUPPLIER':
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              supplier: action.supplier
            }
          } else {
            return item
          }
        })
      };
    case 'START_UPDATE_ORDER_ITEM_EMBELLISHMENT':
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              embellishment_supplier: action.embellishment
            }
          } else {
            return item
          }
        })
      };
    case 'START_UPDATE_ORDER_ITEM_SUPPLIER_STATUS':
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              supplier_status: action.status
            }
          } else {
            return item
          }
        })
      };
    case 'START_UPDATE_ORDER_ITEM_EMBELLISHMENT_STATUS':
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              embellishment_status: action.status
            }
          } else {
            return item
          }
        })
      };
    case 'START_UPDATE_ORDER_ITEM_FACTORY_STATUS':
      return {
        ...state,
        items: state.items.map((item) => {
          if(item.id === action.id) {
            return {
              ...item,
              factory_status: action.status
            }
          } else {
            return item
          }
        })
      };  
    default:
      return state;
  }
};