import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  updateOrderItemSupplierStatus, 
  updateOrderItemEmbellishmentStatus, 
  updateOrderItemFactoryStatus 
} from '../../actions/products';

class WarehouseTableBody extends Component {
  handleOnChageSupplierStatus = (e, id) => {
    const supplierStatus = e.target.value;
    this.props.updateOrderItemSupplierStatus(id, supplierStatus)
  };

  handleOnChangeEmbellishmentStatus = (e, id) => {
    const embellishmentStatus = e.target.value;
    this.props.updateOrderItemEmbellishmentStatus(id, embellishmentStatus)
  };

  handleOnChangeFactoryOrderStatus = (e, id) => {
    const factoryOrderStatus = e.target.value;
    this.props.updateOrderItemFactoryStatus(id, factoryOrderStatus)
  };

  render() {
    const {
      id,
      product_code,
      product_title,
      quantity,
      item_type,
      supplier,
      supplier_status,
      embellishment_supplier,
      embellishment_status,
      factory_status
    } = this.props;
    return (
      <tr>
        <td>{product_code}</td>
        <td>{product_title}</td>
        <td>{quantity}</td>
        <td>{item_type}</td>
        <td>{supplier}</td>
        {
          item_type === 'Local' ?
             <React.Fragment>
              <td>
                <div className="control">
                  <div className="select is-small">
                    <select onChange={(e) => this.handleOnChageSupplierStatus(e, id)}>
                      {supplier_status ? <option>{supplier_status}</option> : <option value="Pending">Pending</option>}
                      <option value="Half Received">Half Received</option>
                      <option value="Received">Received</option>
                    </select>
                  </div>
                </div> 
              </td>
              <td>{embellishment_supplier}</td>
              <td>
                <div className="control">
                  <div className="select is-small">
                    <select 
                      onChange={(e) => this.handleOnChangeEmbellishmentStatus(e, id)} >
                      {embellishment_status ? <option>{embellishment_status}</option> : <option value="Pending">Pending</option>}
                      <option value="Sent To Embellisher">Sent To Embellisher</option>
                      <option value="Received">Received From Embellisher</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>
              </td>
            </React.Fragment> : <React.Fragment>
                    <td>
                      <div className="control">
                        <div className="select is-small">
                          <select 
                            onChange={(e) => this.handleOnChangeFactoryOrderStatus(e, id)}>
                            {factory_status ? <option>{factory_status}</option> : <option value="Pending">Pending</option>}
                            <option value="Half Received">Half Received</option>
                            <option value="Received">Received</option>
                          </select>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td>
                    </td>
            </React.Fragment>


        }

      </tr>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateOrderItemSupplierStatus: (id, status) => dispatch(updateOrderItemSupplierStatus(id, status)),
  updateOrderItemEmbellishmentStatus: (id, status) => dispatch(updateOrderItemEmbellishmentStatus(id, status)),
  updateOrderItemFactoryStatus: (id, status) => dispatch(updateOrderItemFactoryStatus(id, status))
});

export default connect(null, mapDispatchToProps)(WarehouseTableBody);
