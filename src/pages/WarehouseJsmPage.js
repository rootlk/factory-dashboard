import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

import SectionTitle from '../components/SectionTitle/SectionTitle';
import WarehouseSearch from '../components/WarehouseSearch/WarehouseSearch';
import WarehouseTable from '../components/WarehouseTable/WarehouseTable';
import Button from '../components/Button/Button';
import CommentForm from '../components/CommentForm/CommentForm';
import CommentList from '../components/CommentList/CommentList';
import WarehousePrintTable from '../components/WarehousePrintTable/WarehousePrintTable';

class WarehouseJsmPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowCommentForm: false,
      ishowPrint: true,
    }
  };

  handleShowCommentForm = () => {
    const isShowCommentForm = !this.state.isShowCommentForm;
    this.setState({ isShowCommentForm })
  };


  render() {
    const { products, comments, orderId, order } = this.props;
    const { isShowCommentForm } = this.state;
    return (
      <div className="columns">
        <div className="column is-full">
          <div className="warehouse-jsm">
            <SectionTitle title="Warehouse - JSM" />
            <WarehouseSearch />
            {orderId && (
              <React.Fragment>
                <div className="level">
                  <div className="level-left"></div>
                  <div className="level-right">
                    <div className="level-item"><strong>Delivery Date</strong></div>
                    <div className="level-item"><strong>{moment(order.delivery_date).format('YYYY-MM-DD')}</strong></div>
                  </div>
                </div>
                <WarehouseTable products={products ?? []} />
                <div className="block">
                  <Button onClick={this.handleShowCommentForm}>Add Comment</Button>
                </div>
                {isShowCommentForm && <CommentForm />}
                <CommentList comments={comments} />
                <div className="block">
                  <ReactToPrint content={() => this.componentRef}>
                    <PrintContextConsumer>
                      {({ handlePrint }) => (
                        <Button styleClass="is-black" onClick={handlePrint}>Print Packing List</Button>
                      )}
                    </PrintContextConsumer>
                  </ReactToPrint>
                  <div style={{ display: 'none'}}>
                    <WarehousePrintTable order={order} products={products ?? []} ref={el => (this.componentRef = el)} />
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  products: state.products.items,
  comments: state.comments.items,
  orderId: state.orders.order.merchOrderId,
  order: state.orders.order
});

export default connect(mapStateToProps)(WarehouseJsmPage);
