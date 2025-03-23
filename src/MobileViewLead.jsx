// import React from 'react'

// export default function MobileViewLead() {
//   return (
//     <div>MobileViewLead</div>
//   )
// }



import React, { useState } from "react";

const MobileViewLeadTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Sample data
  const tableData = [
    { carId: 379, buyerNumber: "9500095692", appFrom: "Pondy_Property", state: "Pondicherry", viewedDate: "2024-12-25 20:21:31" },
    { carId: 3397, buyerNumber: "9444631332", appFrom: "Pondy_Property", state: "Pondicherry", viewedDate: "2024-12-25 12:19:17" },
    { carId: 8217, buyerNumber: "8489934180", appFrom: "Pondy_Property", state: "Pondicherry", viewedDate: "2024-12-20 16:00:35" },
    { carId: 4751, buyerNumber: "9514449720", appFrom: "Pondy_Property", state: "Pondicherry", viewedDate: "2024-12-19 11:20:20" },
    { carId: 4789, buyerNumber: "9384460500", appFrom: "Rent_Pondy", state: "Pondicherry", viewedDate: "2024-12-11 23:39:17" },
    { carId: 2918, buyerNumber: "9342838316", appFrom: "Rent_Pondy", state: "Tamilnadu", viewedDate: "2024-12-10 13:17:29" },
    { carId: 8221, buyerNumber: "7094192194", appFrom: "PONDY BIKES", state: "Pondicherry", viewedDate: "2024-12-08 11:19:37" },
    { carId: 3682, buyerNumber: "8838221756", appFrom: "Rent_Pondy", state: "Pondicherry", viewedDate: "2024-12-07 16:29:20" },
  ];

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Mobile View Lead</h2>
        <button style={{background:"#5F9EA0", color:"#fff", border:'none'}}>Resolved Insurance - Loan Lead</button>
      </div>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>CAR ID</th>
            <th>BUYER NUMBER</th>
            <th>APP FROM</th>
            <th>STATE</th>
            <th>VIEWED DATE</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, index) => (
            <tr key={index}>
              <td>{row.carId}</td>
              <td>{row.buyerNumber}</td>
              <td>{row.appFrom}</td>
              <td>{row.state}</td>
              <td>{row.viewedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center mt-3">
        <nav>
          <ul className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                onClick={() => handlePageChange(index + 1)}
              >
                <span className="page-link">{index + 1}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileViewLeadTable;
