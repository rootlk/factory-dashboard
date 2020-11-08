import React from 'react';
import WarehouseTableHead from './WarehouseTableHead';
import WarehouseTableBody from './WarehouseTableBody';

const WarehouseTable = (props) => {
  const { products } = props;
  let showWarehouseItem = null;
  const warehouseItems = products.map((item, index) => (
    <WarehouseTableBody
      key={index}
      {...item}
    />
  ))
  showWarehouseItem = products.length > 0 ? warehouseItems : null;
  return (
    <div className="table-overflow">
      <table className="table is-hoverable full">
        <WarehouseTableHead />
        <tbody>
          {showWarehouseItem}
        </tbody>
      </table>
    </div>
  )
};

export default WarehouseTable;