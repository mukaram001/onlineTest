import React, { useState } from "react";

const OrderTable = ({ orders }) => {
  const [sortedOrders, setSortedOrders] = useState(orders);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  // Pagination Logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = sortedOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Sorting Logic
  const sortOrders = (column) => {
    const sorted = [...orders].sort((a, b) => {
      if (typeof a[column] === "string") {
        return a[column].localeCompare(b[column]);
      }
      return a[column] - b[column];
    });
    setSortedOrders(sorted);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortOrders("orderId")}>Order ID</th>
            <th onClick={() => sortOrders("customerName")}>Customer Name</th>
            <th onClick={() => sortOrders("amount")}>Amount</th>
            <th onClick={() => sortOrders("status")}>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(orders.length / ordersPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OrderTable;
