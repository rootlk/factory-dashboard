import React, { Component } from 'react';
//import SectionTitle from '../SectionTitle/SectionTitle';
import moment from 'moment';

class WarehousePrintTable extends Component {
    render() {
        let showAddress = null;
        if (this.props.pickup_store === 'Auckland' || 'North Island' || 'South Island') {
            showAddress = <p className="shipping-address">{this.props.order.shipping_address}</p>
        } else {
            showAddress = <p className="shipping-address">{this.props.pickup_store}</p>
        }
        return (
            <div className="print-table">
                <div className="level">
                    <div className="level-left">
                        <div className="">
                            <h5 className="subtitle is-5" style={{ display: 'block', marginBottom: '3px'}}>
                                <strong>SAS SPORTS LTD</strong>
                            </h5>
                            <p style={{ display: 'block', fontSize: '12px'}}>Unit A, 28 Wood St</p>
                            <p style={{ display: 'block', fontSize: '12px' }}>PO Box 272 1116</p>
                            <p style={{ display: 'block', fontSize: '12px' }}>Papakura</p>
                            <p style={{ display: 'block', fontSize: '12px' }}>Auckland</p>
                            <p style={{ display: 'block', fontSize: '12px' }}>New Zealand</p>
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="print-logo">
                            <img src="./sas1.png" alt="logo" />
                        </div>
                    </div>
                </div>
                <div className="print-heading">
                    <h4 className="subtitle is-4"><strong>PACKING LIST</strong></h4>
                </div>
                <div className="level" style={{ marginBottom: '16px'}}>
                    <div className="level-left">
                        <div>
                            <p><strong>Deliver to:</strong></p>
                            {showAddress}
                        </div>
                    </div>
                    <div className="level-right">
                        <p className="level-item" style={{ display: 'block'}}>
                            <strong>Order Number: {this.props.order.merchOrderId}</strong>
                        </p>
                        <p>
                            <strong>Delivery Date: {moment(this.props.order.delivery_date).format('YYYY-MM-DD')}</strong>
                        </p>
                    </div>
                </div>
                <div>
                    <table className="table is-hoverable full">
                        <thead>
                            <tr>
                                <th style={{ fontSize: '12px', fontWeight: '600' }}>Product Code</th>
                                <th style={{ fontSize: '12px', fontWeight: '600' }}>Product Name</th>
                                <th style={{ textAlign: 'center', fontSize: '12px', fontWeight: '600' }}>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.products.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ fontSize: '12px', fontWeight: '600' }}>{item.product_code}</td>
                                    <td style={{ fontSize: '12px', fontWeight: '600' }}>{item.product_title}</td>
                                    <td style={{ textAlign: 'center', fontSize: '12px', fontWeight: '600' }}>{item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
};

export default WarehousePrintTable;