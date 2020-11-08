import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateOrderStatus } from '../../actions/orders';

class FactoryStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      halfCompleted: 'Half-completed',
      completed: 'Completed'
    }
  }

  handleOnClcikHalfCompleted = (e) => {
    e.preventDefault();
    const { halfCompleted } = this.state;
    const { orderId } = this.props;
    this.props.updateOrderStatus(orderId, halfCompleted)
  };

  handleOnClcikCompleted = (e) => {
    e.preventDefault();
    const { completed } = this.state;
    const { orderId } = this.props;
    this.props.updateOrderStatus(orderId, completed)
  };

  render() {
    const { statusAt } = this.props;
    let statusClass = null;
    statusClass = statusAt === 'Completed' ? 'is-success' : 'is-black'
    const isdisabled = statusAt !== 'Completed';
    return (
      <div className="factory-status">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <span className={`tag ${statusClass} is-medium`}>
                {statusAt}
              </span>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <div className="level-item">
                <button
                  className="button"
                  disabled={statusAt !== 'In-Progress'}
                  onClick={this.handleOnClcikHalfCompleted}
                >
                  Part Completed and Shipped 
                </button>
              </div>
              <div className="level-item">
                <button
                  className="button is-black"
                  disabled={!isdisabled}
                  onClick={this.handleOnClcikCompleted}
                >
                  Completed and Shipped
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  orderId: state.orders.order.merchOrderId,
  statusAt: state.orders.order.statusAtFactory
});

const mapDispatchToProps = (dispatch) => ({
  updateOrderStatus: (orderId, update) => dispatch(updateOrderStatus(orderId, update))
});

export default connect(mapStateToProps, mapDispatchToProps)(FactoryStatus);
