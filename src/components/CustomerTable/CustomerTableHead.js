import React from 'react';

const CustomerTableHead = () => {
  return (
    <thead>
      <tr>
        <th>Product Code</th>
        <th>Product Name</th>
        <th style={{ textAlign: 'center' }}>Quantity</th>
        <th style={{ textAlign: 'center' }}>Type</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
  )
};

export default CustomerTableHead;