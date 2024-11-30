import React from "react";
import styled from "styled-components";

const transactions = [
  {
    dateTime: "2023-11-30T09:16:00.000Z",
    toFrom: "Transfer to Ops / Payroll",
    amount: "-54,810.16",
    account: "AR",
    paymentMethod: "Transfer",
    attachment: true,
  },
  {
    dateTime: "2023-11-30T09:15:00.000Z",
    toFrom: "Transfer from AR",
    amount: "54,810.16",
    account: "Ops / Payroll",
    paymentMethod: "Transfer",
    attachment: true,
  },
  {
    dateTime: "2023-11-30T12:30:00.000Z",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
  {
    dateTime: "2023-11-28T15:45:00.000Z",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
];

const groupAndSortTransactions = (transactions) => {
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()
  );

  const grouped = {};

  sortedTransactions.forEach((transaction) => {
    const date = new Date(transaction.dateTime).toLocaleDateString();
    if (!grouped[date]) grouped[date] = [];
    grouped[date].push(transaction);
  });

  return grouped;
};

const Table = () => {
  const groupedTransactions = groupAndSortTransactions(transactions);
  console.log(groupedTransactions, "groupedTransactions");

  return (
    <Section>
      <TableContainer className="container">
        <div className="table-wrapper">
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Date</th>
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
                    const time = new Date(transaction.dateTime).toISOString();
                    return (
                      <tr key={index} className="transaction-row">
                        <td className="date-cell">
                          {index === 0 ? (
                            <>
                              <span className="date">{date}</span>
                              <br />
                              <span className="time-show">{time}</span>
                            </>
                          ) : (
                            <>
                              <span className="date hidden">{date}</span>
                              <br />
                              <span className="time">{time}</span>
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
                        <td>{transaction.attachment ? "+" : "-"}</td>
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
  );
};

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

  @media (max-width: 576px) {
    .transactions-table th:nth-child(4),
    .transactions-table td:nth-child(4), /* Hide "Account" column */
    .transactions-table th:nth-child(6),
    .transactions-table td:nth-child(6) /* Hide "Attachment" column */ {
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

export default Table;
