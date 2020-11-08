import React from 'react';

const WarehouseTableHead = () => {
  return (
    <thead>
      <tr>
        <th>Product Code</th>
        <th>Product Name</th>
        <th style={{ textAlign: 'center' }}>Quantity</th>
        <th style={{ textAlign: 'center' }}>Type</th>
        <th style={{ textAlign: 'center' }}> Supplier </th>
        <th style={{ textAlign: 'center' }}>Supplier Status</th>
        <th style={{ textAlign: 'center' }}> Embellishment </th>
        <th style={{ textAlign: 'center' }}> Embellishment Status</th>
      </tr>
    </thead>
  )
};

export default WarehouseTableHead;
