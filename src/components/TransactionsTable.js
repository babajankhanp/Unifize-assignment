import React,{useState} from "react";
import styled from "styled-components";
import useGroupAndSortTransactions from "../hooks/useGroupAndSortTransactions";
import transactions from "../utils/transactions";

const getRandomColor = () => {
  const colors = [
    "#CFD8DC",
    "#B0BEC5",
    "#D7CCC8",
    "#ECEFF1",
    "#E0F2F1",
    "#B3E5FC",
    "#FFCCBC",
    "#C5CAE9",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};


const TransactionsTable = () => {
  const [sortOrder, setSortOrder] = useState({ date: "desc", time: "desc" });

  const handleSortOrderChange = (type) => {
    setSortOrder((prev) => ({
      ...prev,
      [type]: prev[type] === "asc" ? "desc" : "asc",
    }));
  };

  const groupedTransactions = useGroupAndSortTransactions(transactions, sortOrder);

    const exportToCSV = () => {
    const rows = [
      ["Time Stamp", "To/From", "Amount", "Account", "Payment Method", "Attachment"],
    ];

    Object.entries(groupedTransactions).forEach(([date, transactions]) => {
      transactions.forEach((transaction) => {
        const dateObj = new Date(transaction.dateTime);
        const formattedDate = dateObj.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        });
        const formattedTime = dateObj.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        rows.push([
          `${formattedDate} ${formattedTime}`,
          transaction.toFrom,
          transaction.amount,
          transaction.account,
          transaction.paymentMethod,
          transaction.attachment ? "Yes" : "No",
        ]);
      });
    });

    const csvContent =
      "data:text/csv;charset=utf-8," +
      rows.map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "transactions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section>
      <h2> Transactions Table</h2>
      <TableContainer className="container">
      <Controls>
       <SortButtons>
        <button onClick={() => handleSortOrderChange("date")}>
          Sort by Date: {sortOrder.date === "asc" ? "Ascending" : "Descending"}
        </button>
        <button onClick={() => handleSortOrderChange("time")}>
          Sort by Time: {sortOrder.time === "asc" ? "Ascending" : "Descending"}
        </button>
      </SortButtons>
      <ExportButton type="button" onClick={exportToCSV}>
      <ExportImage>
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-down-to-line" class="svg-inline--fa fa-arrow-down-to-line styles__icon_rh7Ps styles__left_e8OCi" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M360 480c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l336 0zM174.5 344.4c4.5 4.8 10.9 7.6 17.5 7.6s12.9-2.7 17.5-7.6l128-136c9.1-9.7 8.6-24.8-1-33.9s-24.8-8.6-33.9 1L216 267.5l0-83.5 0-128c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 128 0 83.5L81.5 175.6c-9.1-9.7-24.3-10.1-33.9-1s-10.1 24.3-1 33.9l128 136z"></path></svg>
        Export All
      </ExportImage>
     </ExportButton>
      </Controls>
        <div className="table-wrapper">
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Time Stamp</th>
                <th>To/From</th>
                <th>Amount</th>
                <th>Account</th>
                <th>Payment Method</th>
                <th>Attachment</th>
              </tr>
            </thead>
             <tbody>
             {Object.entries(groupedTransactions).map(([date, transactions]) => (
                <React.Fragment key={date}>
                  {transactions.map((transaction, index) => {
                    const dateObj = new Date(transaction.dateTime);
                    const formattedDate = dateObj.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    });
                    const formattedTime = dateObj.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    });
                    return (
                      <tr key={index} className="transaction-row">
                        <td className="date-cell">
                          {index === 0 ? (
                            <>
                              <span className="date">{formattedDate}</span>
                              <br />
                              <span className="time-show">{formattedTime}</span>
                            </>
                          ) : (
                            <>
                              <span className="date hidden">{formattedDate}</span>
                              <br />
                              <span className="time">{formattedTime}</span>
                            </>
                          )}
                        </td>
                        <td>
                          <div className="avatar-flex">
                            <div
                              className="avatar"
                              style={{ backgroundColor: getRandomColor() }}
                            >
                              {transaction.toFrom[0]}
                            </div>
                            {transaction.toFrom}
                          </div>
                        </td>
                        <td
                          className={`amount ${
                            transaction.amount.startsWith("-")
                              ? "negative"
                              : "positive"
                          }`}
                        >
                          {transaction.amount}
                        </td>
                        <td>{transaction.account}</td>
                        <td>{transaction.paymentMethod}</td>
                        <td><div className="plus">{transaction.attachment ? "+" : "-"}</div></td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </TableContainer>
    </Section>
  )
}

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
`;

const TableContainer = styled.div`
  .container {
    margin: 2rem auto;
    padding: 1rem;
    background: #fff;
    border-radius: 8px;
    background-color: #f9fafb;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    overflow-x: auto;
  }

  .transactions-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }

  .transactions-table th,
  .transactions-table td {
    text-align: left;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #eaeaea;
    font-size: 0.875rem;
  }

  .transactions-table th {
    background-color: #f5f5f5;
    font-weight: 600;
    color: #555;
  }

  .transaction-row:hover {
    background-color: #f9f9f9;
  }

  .date-cell {
    position: relative;
    cursor: pointer;
  }

  .date {
    font-weight: bold;
    color: #333;
  }

  .hidden {
    visibility: hidden;
  }

  .transaction-row:hover .hidden {
    visibility: visible;
  }

  .time {
    font-size: 0.85rem;
    color: #888;
    visibility: hidden;
  }

  .time-show {
    font-size: 0.85rem;
    color: #888;
    visibility: visible;
  }

  .transaction-row:hover .time {
    visibility: visible;
  }

  .amount.negative {
    color: #e63946;
  }

  .amount.positive {
    color: #2a9d8f;
  }

  .avatar-flex {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .transactions-table th,
    .transactions-table td {
      padding: 0.5rem 0.75rem;
      font-size: 0.8rem;
    }

    .avatar {
      width: 32px;
      height: 32px;
      font-size: 0.9rem;
    }

    .date-cell {
      white-space: nowrap;
    }
  }

  .plus {
    width: 36px;
    height: 36px;
    background-color: rgba(112,115,147,0.058823529411764705);
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #363644;
    border-radius: 50%;
  }

  @media (max-width: 576px) {
    .transactions-table th:nth-child(4),
    .transactions-table td:nth-child(4),
    .transactions-table th:nth-child(6),
    .transactions-table td:nth-child(6)  {
      display: none;
    }

    .transactions-table th,
    .transactions-table td {
      padding: 0.5rem;
      font-size: 0.75rem;
    }

    .avatar {
      width: 28px;
      height: 28px;
      font-size: 0.8rem;
    }
  }
`;

const SortButtons = styled.div`
  margin-bottom: 1rem;
  margin-top: 2rem;


 @media (max-width:768px){
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;

    }

  button {
    padding:1rem;
    margin: 0 0.5rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #0056b3;
    }


     @media (max-width:768px){
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        justify-content: center;
        align-items: center;

     }
  }
`;

const Controls = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 100%;

     @media (max-width:768px){
        flex-direction: column;

     }
`;

const ExportButton = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: 0.5rem;
     height: 100%;
     padding: 0 10px;
     border-radius: 50px;
     background-color: rgba(112, 115, 147, 0.058823529411764705);
     cursor: pointer;
     border: 1px solid #454545;
`;

const ExportImage = styled.div`
   margin: 0 1rem;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   gap: 1rem;
   min-height: 50px;
   cursor: pointer;

    svg {
        width: 15px;
    }
`;

export default TransactionsTable