import React from "react";
import { GlobalStore } from "../store/GlobalStore";

export const Transaction = (props) => {
  const sign = props.transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = React.useContext(GlobalStore);
  return (
    <li className={props.transaction.amount < 0 ? "minus" : "plus"}>
      {props.transaction.text}{" "}
      <span>
        {sign}
        {Math.abs(props.transaction.amount)}/-
      </span>
      <button
        onClick={() => deleteTransaction(props.transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
