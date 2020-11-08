// products action
import axios from 'axios';

export const startSetProductItems = (items) => ({
  type: 'START_SET_PRODUCT_ITEMS',
  items
});

export function updateOrderItemTypeItem(id, type) {
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
      .put(`http://backend.sas.co.nz/api/order-items/update-item-type/${id}`, { item_type: type }, options)
      .then(response => {
        const { id, item_type } = response.data.data;
        dispatch(startUpdateOrderItemType(id, item_type))
      })
  }
};

export const startUpdateOrderItemType = (id, item) => ({
  type: 'START_UPDATE_ORDER_ITEM_TYPE',
  id,
  item
});

export function UpdateOrderItemSupplier(id, update) {
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
      .put(`http://backend.sas.co.nz/api/order-items/update-supplier/${id}`, { supplier: update }, options)
      .then(response => {
        const { id, supplier } = response.data.data
        dispatch(startUpdateOrderItemSupplier(id, supplier))
      })
  }
};

export const startUpdateOrderItemSupplier = (id, supplier) => ({
  type: 'START_UPDATE_ORDER_ITEM_SUPPLIER',
  id,
  supplier
});

export function UpdateOrderItemEmbellishment(id, embellishment) {
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
      .put(`http://backend.sas.co.nz/api/order-items/update-embellishment-supplier/${id}`, { embellishment_supplier: embellishment }, options)
      .then(response => {
        const { id, embellishment_supplier } = response.data.data
        dispatch(startUpdateOrderItemEmbellishment(id, embellishment_supplier))
      })
  }
};

export const startUpdateOrderItemEmbellishment = (id, embellishment) => ({
  type: 'START_UPDATE_ORDER_ITEM_EMBELLISHMENT',
  id,
  embellishment
});

export function updateOrderItemSupplierStatus(id, status) {
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
      .put(`http://backend.sas.co.nz/api/order-items/update-supplier-status/${id}`, { supplier_status: status }, options)
      .then(response => {
        const { id, supplier_status } = response.data.data;
        dispatch(startUpdateOrderItemSupplierStatus(id, supplier_status))
      })
  }
};

export const startUpdateOrderItemSupplierStatus = (id, status) => ({
  type: 'START_UPDATE_ORDER_ITEM_SUPPLIER_STATUS',
  id,
  status
});

export function updateOrderItemEmbellishmentStatus(id, status) {
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
      .put(`http://backend.sas.co.nz/api/order-items/update-embellishment-status/${id}`, { embellishment_status: status }, options)
      .then(response => {
        const { id, embellishment_status } = response.data.data;
        dispatch(startUpdateOrderItemEmbellishmentStatus(id, embellishment_status))
      })
  }
};

export const startUpdateOrderItemEmbellishmentStatus = (id, status) => ({
  type: 'START_UPDATE_ORDER_ITEM_EMBELLISHMENT_STATUS',
  id,
  status
});

export function updateOrderItemFactoryStatus(id, status) {
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
      .put(`http://backend.sas.co.nz/api/order-items/update-factory-status/${id}`, { factory_status: status }, options)
      .then(response => {
        const { id, factory_status } = response.data.data;
        dispatch(startUpdateOrderItemFactoryStatus(id, factory_status))
      })
  }
};

export const startUpdateOrderItemFactoryStatus = (id, status) => ({
  type: 'START_UPDATE_ORDER_ITEM_FACTORY_STATUS',
  id,
  status
});

