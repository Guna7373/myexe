import React from "react";
export default function ({ customers }) {
  return (
    <div>
      <h3>customer list</h3>
      <ul style={{ listStyle: "none" }}>
        {customers.map((eachcustomer, index) => (
          <li key={index}>{eachcustomer.name}</li>
        ))}
      </ul>
    </div>
  );
}
