import React from 'react';
import FactoryTableHead from './FactoryTableHead';
import FactoryTableBody from './FactoryTableBody';

const FactoryTable = (props) => {
  const { items } = props;
  let showProductItems = null;
  const itemList = items.map((item, index) => <FactoryTableBody key={index} {...item} />);
  showProductItems = items.length > 0 ? itemList : null;
  return (
    <div className="table-overflow">
      <table className="table is-hoverable full">
        <FactoryTableHead />
        <tbody>
          {showProductItems}
        </tbody>
      </table>
    </div>
  )
};

export default FactoryTable;