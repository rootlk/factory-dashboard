import React from 'react';
import CustomerTableHead from './CustomerTableHead';
import CustomerTableBody from './CustomerTableBody';

const CustomerTable = (props) => {
  const { products, suppliers, embellishments, disableAll } = props;
  let showProducts = null;
  const itemsList = products.map((item, index) => (
    <CustomerTableBody
      key={index}
      suppliers={suppliers}
      embellishments={embellishments}
      disableAll={disableAll}
      {...item}
    />
  ))
  showProducts = products.length > 0 ? itemsList : null;
  return (
    <div className="table-overflow">
      <table className="table is-hoverable full">
        <CustomerTableHead />
        <tbody>{showProducts}</tbody>
      </table>
    </div>
  )
};

export default CustomerTable;
