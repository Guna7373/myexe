import React, { useState } from "react";
import Customerview from "./Customerview";
// import { addcustomer as  addcustomerAction, } from './Slices/Customerslice';
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "./redux/actions";

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

  
  return (
    <>
      <div>
        <h3>Customeradd</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addcustomer}>submit</button>
      </div>
      <Customerview customers={customers} />
    </>
  );
}
