import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import qs from 'qs';

import SectionTitle from '../components/SectionTitle/SectionTitle';
import SearchForm from '../components/SearchForm/SearchForm';
import FactoryTable from '../components/FactoryTable/FactoryTable';
import Button from '../components/Button/Button';
import CommentForm from '../components/CommentForm/CommentForm';
import CommentList from '../components/CommentList/CommentList';
import FactoryStatus from '../components/FactoryStatus/FactoryStatus';
//import orders from "../reducers/orders";
import history from '../helper/history'
import { getOrderByOrderId } from '../actions/orders';

class FactoryDashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowCommentForm: false
    }
  };

  handleShowCommentForm = () => {
    const isShowCommentForm = !this.state.isShowCommentForm;
    this.setState({ isShowCommentForm })
  };

  componentDidMount() {
    const purifiedQuery = this.props.location.search.replace('?','');
    const params = qs.parse(purifiedQuery);
    if (params.id !== undefined) {
      this.props.getOrderByOrderId(params.id);
    }
  }

  render() {
    const { isShowCommentForm } = this.state;
    const { items, comments, merchOrderId, statusAtFactory } = this.props;
    return (
      <div className="columns">
        <div className="column is-full">
          <div className="factory-dashboard">
            <SectionTitle title="Factory Dashboard" />
            <SearchForm
            onPress={function (orderId) {
              history.push('/factory?id=' + orderId)
            }}
            />
            {merchOrderId && (
              <Fragment>
                <FactoryTable items={items} />
                {statusAtFactory !== 'Completed' && (
                  <div className="block">
                    <Button onClick={this.handleShowCommentForm}>Add Comment</Button>
                  </div>
                )}
                {isShowCommentForm && <CommentForm />}
                <CommentList comments={comments} />
                <FactoryStatus />
              </Fragment>
            )}
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  items: state.products.items,
  comments: state.comments.items,
  merchOrderId: state.orders.order.merchOrderId,
  statusAtFactory: state.orders.order.statusAtFactory,
});

const mapDispatchToProps = (dispatch) => ({
  getOrderByOrderId: (orderId) => dispatch(getOrderByOrderId(orderId))
});

export default connect(mapStateToProps, mapDispatchToProps)(FactoryDashboardPage);
