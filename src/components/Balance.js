import React from "react";
import { GlobalStore } from "../store/GlobalStore";

export const Balance = () => {
  const ctx = React.useContext(GlobalStore);
  const amounts = ctx.transactions.map((transaction) => transaction.amount);
  const totalAmount = amounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">Rs:{totalAmount}</h1>
    </>
  );
};
