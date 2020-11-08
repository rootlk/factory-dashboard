import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateOrderItemTypeItem, UpdateOrderItemSupplier, UpdateOrderItemEmbellishment } from '../../actions/products';

class CustomerTableBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      isTypeVisibility: false,
      optionsDisabled: false
    }
  };

  componentDidMount() {
    if (this.props.item_type === 'Local') {
      this.setState({isTypeVisibility : true})
    }
    //console.log(this.props)
    if (this.props.disableAll === true) {
      this.setState({optionsDisabled: true})
    }

  }

  handleOnChangeFactory = (e, id) => {
    const type = e.target.value;
    this.setState({ type })
    this.props.updateOrderItemTypeItem(id, type)
    this.setState({ isTypeVisibility: false })
  };

  handleOnChangeLocal = (e, id) => {
    const type = e.target.value;
    this.setState({ type })
    this.props.updateOrderItemTypeItem(id, type)
    this.setState({ isTypeVisibility: true })
  };

  handleOnChangeSuppliers = (e, id) => {
    const supplier = e.target.value;
    this.props.UpdateOrderItemSupplier(id, supplier)
  };

  handleOnChangeEmbellishment = (e, id) => {
    const embellishment = e.target.value;
    this.props.UpdateOrderItemEmbellishment(id, embellishment)
  };

  render() {
    const { isTypeVisibility } = this.state;
    const {
      id,
      product_code,
      product_title,
      quantity,
      suppliers,
      embellishments,
      item_type,
      supplier,
      embellishment_supplier
    } = this.props;

    return (
      <tr>
        <td>{product_code}</td>
        <td>{product_title}</td>
        <td style={{ textAlign: 'center' }}>{quantity}</td>
        <td style={{ textAlign: 'center' }}>
          <div className="control">
            <label className="radio">
              <input
                disabled={this.state.optionsDisabled}
                type="radio"
                value="Factory"
                checked={item_type === 'Factory'}
                onChange={(e) => this.handleOnChangeFactory(e, id)}
              />
                 Factory
            </label>
            <label className="radio">
              <input
                disabled={this.state.optionsDisabled}
                type="radio"
                value="Local"
                checked={item_type === 'Local'}
                onChange={(e) => this.handleOnChangeLocal(e, id)}
              />
                 Local
            </label>
          </div>
        </td>
        {isTypeVisibility ? (
          <Fragment>
            <td>
              <div className="control">
                <div className="select is-small">
                  <select
                          disabled={this.state.optionsDisabled}
                          onChange={(e) => this.handleOnChangeSuppliers(e, id)}
                          value={supplier}
                  >
                    <option value="" defaultValue>Supplier</option>
                    {suppliers.map((suppl) => (
                      <option key={suppl.id} value={suppl.name}>{suppl.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div className="control">
                <div className="select is-small">
                  <select
                          disabled={this.state.optionsDisabled}
                          onChange={(e) => this.handleOnChangeEmbellishment(e, id)}
                          value={embellishment_supplier}
                  >
                    <option value="" defaultValue>Embellishment</option>
                    {embellishments.map((embs) => (
                      <option key={embs.id} value={embs.name}>{embs.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </td>
          </Fragment>
        ) : (
            <Fragment>
              <td></td>
              <td></td>
            </Fragment>
          )}
      </tr>
    )
  }
};

const mapStateToProps = state => ({
  products: state.products.items
});

const mapDispatchToProps = (dispatch) => ({
  updateOrderItemTypeItem: (id, type) => dispatch(updateOrderItemTypeItem(id, type)),
  UpdateOrderItemSupplier: (id, supplier) => dispatch(UpdateOrderItemSupplier(id, supplier)),
  UpdateOrderItemEmbellishment: (id, embellishment) => dispatch(UpdateOrderItemEmbellishment(id, embellishment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerTableBody);
