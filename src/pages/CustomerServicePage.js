import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateDeliveryDate } from '../actions/orders';
import axios from 'axios';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import moment from 'moment';


import SectionTitle from '../components/SectionTitle/SectionTitle';
import SearchForm from '../components/SearchForm/SearchForm';
import CustomerTable from '../components/CustomerTable/CustomerTable';
import Button from '../components/Button/Button';
import CommentForm from '../components/CommentForm/CommentForm';
import CommentList from '../components/CommentList/CommentList';
import {enableOrderForWarehouse} from "../actions/orders";

class CustomerServicePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suppliers: [],
      embellishments: [],
      isShowCommentForm: false,
      selectedDay: undefined,
    }
  };

  handleDayChange(day) {
    this.setState({ selectedDay: day })
  }

  handleDeliveryDate() {
    const merchOrderId = this.props.order.merchOrderId;
    const deliveryDate = moment(this.state.selectedDay).format('YYYY-MM-DD')
    this.props.updateDeliveryDate(merchOrderId, deliveryDate)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.selectedDay !== this.state.selectedDay) {
      //console.log('update')
      this.handleDeliveryDate()
    }
  }

  getAllSuppliers = () => {
    return axios
      .get('http://backend.sas.co.nz/api/suppliers')
      .then(response => this.setState({ suppliers: response.data.data }))
  };

  getAllEmbellishment = () => {
    return axios
      .get('http://backend.sas.co.nz/api/embellishment-suppliers')
      .then(response => this.setState({ embellishments: response.data.data }))
  };

  handleShowCommentForm = () => {
    const isShowCommentForm = !this.state.isShowCommentForm;
    this.setState({ isShowCommentForm })
  };

  enableOrderForWarehouse = async (orderId) => {
    let allProductsAreMarked = true;
    this.props.products.forEach(function(product) {
      if (!!product.item_type === false) {
        allProductsAreMarked = false
      }
    });

    if (allProductsAreMarked === false) {
      alert('You have not options for all products. Please select them before submitting')
    } else {
      const comfirmToSend = window.confirm('Are you sure you want to send this to warehouse ? (After sending you will not be bale to update this order)')
      if (comfirmToSend === true) {
        await this.props.enableOrderForWarehouse(orderId)
      }
    }
    window.location.reload()
  }

  componentDidMount() {
    this.getAllSuppliers();
    this.getAllEmbellishment();
  };

  render() {
    const { suppliers, embellishments, isShowCommentForm } = this.state;
    const { products, order, comments } = this.props;
    return (
      <div className="columns">
        <div className="column is-full">
          <div className="customer-service-jsm">
            <SectionTitle title="Customer Service - JSM" />
            <SearchForm />
            {order.merchOrderId && (
              <React.Fragment>
                <div className="level">
                  <div className="level-left"></div>
                  <div className="level-right">
                    <div className="level-item">
                      <strong>Delivery Date</strong>
                    </div>
                    <div className="level-item">
                      <DayPickerInput 
                        inputProps={{ 
                          style: { 
                            height: '2.5em',
                            fontSize: '1rem',
                            textAlign: 'center',
                            borderRadius: '4px',
                            border: '1px solid #dbdbdb' 
                          } 
                        }} 
                        onDayChange={(day) => this.handleDayChange(day)}/>
                    </div>
                  </div>
                </div>
                <CustomerTable
                  products={products}
                  suppliers={suppliers}
                  embellishments={embellishments}
                  disableAll={this.props.order.enabledForWarehouse === 'Yes'}
                />
                <div className="block">
                  <Button onClick={this.handleShowCommentForm}>Add Comment</Button>
                </div>
                {isShowCommentForm && <CommentForm />}
                <CommentList comments={comments} />
                <div className="block">
                  <Button disabled={this.props.order.enabledForWarehouse === 'Yes'} onClick={(e) => this.enableOrderForWarehouse(order.merchOrderId)} styleClass="is-black">Submit to Warehouse</Button>
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
  order: state.orders.order,
  comments: state.comments.items,
})

const mapDispatchToProps = (dispatch) => ({
  enableOrderForWarehouse: (orderId) => dispatch(enableOrderForWarehouse(orderId)),
  updateDeliveryDate: (orderId, date) => dispatch(updateDeliveryDate(orderId, date))
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerServicePage);
