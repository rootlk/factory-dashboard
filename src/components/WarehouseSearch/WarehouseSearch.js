import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWarehouseOrde } from '../../actions/orders'

import InputField from '../InputField/InputField';
import Button from '../Button/Button';

class WarehouseSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: ''
    }
  };

  handleOnChangeOrderId = e => {
    const orderId = e.target.value;
    this.setState({ orderId })
  };

  handleOnSubmitForm = e => {
    e.preventDefault();
    const { orderId } = this.state;
    this.props.getWarehouseOrde(orderId)
    this.setState({ orderId: '' })
  };

  render() {
    const { orderId } = this.state;
    const isdisabled = !orderId
    return (
      <div className="columns">
        <div className="column is-4">
          <form onSubmit={this.handleOnSubmitForm}>
            <div className="field has-addons">
              <InputField
                type="text"
                placeholder="OrderId"
                value={orderId}
                onChange={this.handleOnChangeOrderId}
              />
              <p className="control">
                <Button styleClass="is-black" disabled={isdisabled}>Search</Button>
              </p>
            </div>
          </form>
        </div>
        <div className="column is-8">
          {this.props.merchOrderId && (
            <div className="order-number">
              <h5><strong>Order Number: {this.props.merchOrderId}</strong></h5>
            </div>
          )}
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  merchOrderId: state.orders.order.merchOrderId
});

const mapDispatchToProps = (dispatch) => ({
  getWarehouseOrde: (orderId) => dispatch(getWarehouseOrde(orderId))
});

export default connect(mapStateToProps, mapDispatchToProps)(WarehouseSearch);