import React from "react";
import styled from "styled-components";

const transactions = [
  {
    date: "Nov 30",
    toFrom: "Transfer to Ops / Payroll",
    amount: "-54,810.16",
    account: "AR",
    paymentMethod: "Transfer",
    attachment: true,
  },
  {
    date: "Nov 30",
    toFrom: "Transfer from AR",
    amount: "54,810.16",
    account: "Ops / Payroll",
    paymentMethod: "Transfer",
    attachment: true,
  },
  {
    date: "Nov 30",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
    {
    date: "Nov 30",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
    {
    date: "Nov 30",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
    {
    date: "Nov 30",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
    {
    date: "Nov 28",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
  {
    date: "Nov 28",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
    {
    date: "Nov 28",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
   {
    date: "Nov 28",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
    {
    date: "Nov 28",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
   {
    date: "Nov 28",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
    {
    date: "Nov 28",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
   {
    date: "Nov 28",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
    {
    date: "Nov 28",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
   {
    date: "Nov 28",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
    {
    date: "Nov 28",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
   {
    date: "Nov 28",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
    {
    date: "Nov 28",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
   {
    date: "Nov 28",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
    {
    date: "Nov 28",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
   {
    date: "Nov 28",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
    {
    date: "Nov 27",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
      {
    date: "Nov 27",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
      {
    date: "Nov 27",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
      {
    date: "Nov 27",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
      {
    date: "Nov 27",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
      {
    date: "Nov 27",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
      {
    date: "Nov 27",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
      {
    date: "Nov 27",
    toFrom: "Lily's Eatery",
    amount: "0.93",
    account: "Ops / Payroll",
    paymentMethod: "Jane B. ••1234",
    attachment: true,
  },
];

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


const Table = () => {
  const shownDates = new Set();
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
            {transactions.map((transaction, index) => {
              const showDate = !shownDates.has(transaction.date);
              if (showDate) shownDates.add(transaction.date);
                const avatarColor = getRandomColor();
              return (
                <tr key={index} className="transaction-row">
                  <td className="date-cell">
                    <span
                      className={`date ${
                        !showDate ? "hidden-date" : ""
                      }`}
                    >
                      {transaction.date}
                    </span>
                  </td>
                  <td>
                  <div className="avatar-flex">
                  <div
                       className="avatar"
                        style={{ backgroundColor: avatarColor }}
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
  margin: 0;
  padding: 0;
  background: #fff;
  border-radius: 8px;
  background-color: #f9fafb;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.table-wrapper {
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

.hidden-date {
  visibility: hidden;
}

.date-cell:hover .hidden-date {
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
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-weight: bold;
  position: relative;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.small-circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #000;
  position: absolute;
  bottom: 3px;
  right: 3px;
}

`;

export default Table;
