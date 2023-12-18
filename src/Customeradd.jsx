import React, { useState } from "react";
import Customerview from "./Customerview";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer, deleteCustomer } from "./redux/actions";

export default function Customeradd() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customerData.customers);
  console.log(customers);
  function addcustomer() {
    if (input) {
      dispatch(addCustomer({ id: Date.now(), name: input }));
      setInput("");
    }
  }
  function deleteCustomer() {
    if (input) {
      dispatch(deleteCustomer({ id: Date.now(), name: input }));
      setInput("");
    }
  }

  
  return (
    <>
      <div>
        <h3>Customeradd</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addcustomer}>Add</button>
        <button onClick={deleteCustomer}>Delete</button>
      </div>
      <Customerview customers={customers} />
    </>
  );
}
