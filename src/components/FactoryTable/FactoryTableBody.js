import React from 'react';

const FactoryTableBody = (props) => {
  const { product_code, product_title, quantity } = props;
  return (
    <tr>
      <td>{product_code}</td>
      <td>{product_title}</td>
      <td style={{ textAlign: 'center' }}>{quantity}</td>
    </tr>
  )
};

export default FactoryTableBody;