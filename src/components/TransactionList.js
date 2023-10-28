import React from "react";
import { GlobalStore } from "../store/GlobalStore";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const ctx = React.useContext(GlobalStore);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {ctx.transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
