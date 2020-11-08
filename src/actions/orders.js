// orders actions
import axios from 'axios';
import { startSetProductItems } from './products';
import { startSetCommentItems } from './comments';

export function getOrderByOrderId(orderId) {
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
      .get(`http://backend.sas.co.nz/api/orders/${orderId}`, { options })
      .then(response => {

        if (Array.isArray(response.data.data) && response.data.data.length === 0) {
          alert('Order ID ' + orderId + ' not found. Please check the order ID and retry it again')
          return
        }
        const { merch_order_id, status_at_factory, enabled_for_warehouse, delivery_date, items, comments } = response.data.data
        dispatch(startgetOrder(merch_order_id, status_at_factory, enabled_for_warehouse, delivery_date))
        dispatch(startSetProductItems(items))
        dispatch(startSetCommentItems(comments))
      })
  }
};

const startgetOrder = (merchOrderId, statusAt, enabledForWarehouse, shipping_address, delivery_no, job_no, order_date, delivery_date, pickup_store) => ({
  type: 'START_GET_ORDER',
  orderId: parseInt(merchOrderId),
  statusAt,
  enabledForWarehouse,
  shipping_address, 
  delivery_no, 
  job_no, 
  order_date,
  delivery_date,
  pickup_store
});

export function updateOrderStatus(orderId, status) {
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
      .put(`http://backend.sas.co.nz/api/orders/${orderId}`, { status: status }, options)
      .then(response => {
        const { merch_order_id, status_at_factory } = response.data.data
        dispatch(startUpdateOrderStatus(merch_order_id, status_at_factory))
      })
  }
};


export function enableOrderForWarehouse(orderId) {
    console.log('enabledForwarehouse called with ', orderId)
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
                .patch(`http://backend.sas.co.nz/api/orders/${orderId}`, { enabled_for_warehouse: 'Yes' }, options)
                .then(response => {
                    const { merch_order_id, status_at_factory } = response.data.data
                    dispatch(startUpdateOrderStatus(merch_order_id, status_at_factory, 'Yes'))
                })
    }
};

const startUpdateOrderStatus = (merchOrderId, status, enabledForWarehouse) => ({
  type: 'START_UPDATE_ORDER_STATUS',
  orderId: parseInt(merchOrderId),
  status,
    enabledForWarehouse
});

export function getWarehouseOrde(orderId) {
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
      .get(`http://backend.sas.co.nz/api/orders/search-warehouse-order/${orderId}`, options)
      .then(response => {

        if (Array.isArray(response.data.data) && response.data.data.length === 0) {
          alert('Order ID ' + orderId + ' not found. Please check the order ID and retry it again')
          return
        }
        
        const { merch_order_id, status_at_factory, enabled_for_warehouse, shipping_address, delivery_no, job_no, order_date, delivery_date, pickup_store, items, comments } = response.data.data;
        dispatch(startgetOrder(merch_order_id, status_at_factory, enabled_for_warehouse, shipping_address, delivery_no, job_no, order_date, delivery_date, pickup_store))
        dispatch(startSetProductItems(items))
        dispatch(startSetCommentItems(comments))
      })
  }
};

export function updateDeliveryDate(merchOrderId, date) {
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
      .put(`http://backend.sas.co.nz/api/orders/update-delivery-date/${merchOrderId}`, { delivery_date: date}, options)
      .then(response => {
        const { merch_order_id, delivery_date } = response.data.data;
        dispatch(startUpdateDeliveryDate(merch_order_id, delivery_date))
      })
  }
}

const startUpdateDeliveryDate = (merch_order_id, delivery_date) => ({
  type: 'START_UPDATE_DELIVERY_DATE',
  merch_order_id,
  delivery_date
});