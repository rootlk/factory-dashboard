// orders reducer
const ordersReducerDefaultState = {
  order: {
    merchOrderId: '',
    statusAtFactory: '',
    enabledForWarehouse: '',
    shipping_address: '',
    delivery_no: '',
    job_no: '',
    order_date: '',
    delivery_date: '',
    pickup_store: '',
  }
};

export default (state = ordersReducerDefaultState, action) => {
  switch (action.type) {
    case 'START_GET_ORDER':
      return {
        order: {
          merchOrderId: action.orderId,
          statusAtFactory: action.statusAt,
          enabledForWarehouse: action.enabledForWarehouse,
          shipping_address: action.shipping_address,
          delivery_no: action.delivery_no,
          job_no: action.job_no,
          order_date: action.order_date,
          delivery_date: action.delivery_date,
          pickup_store: action.pickup_store
        }
      };
    case 'START_UPDATE_ORDER_STATUS':
      return {
        order: {
          merchOrderId: action.orderId,
          statusAtFactory: action.status,
          enabledForWarehouse: action.enabledForWarehouse,
        }
      }
    case 'START_UPDATE_DELIVERY_DATE':
      return {
        order: {
          merchOrderId: action.merch_order_id,
          delivery_date: action.delivery_date
        }
      }  
    default:
      return state;
  }
};
