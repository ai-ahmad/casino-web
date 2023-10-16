import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Game.css";

const ClickTable = (props) => {
  // Initialize state to store selected bets
  const [selectedNo, setSelectedNo] = useState([]);

  // Load selected bets from local storage when props.coin changes
  useEffect(() => {
    if (localStorage.getItem("selected")) {
      setSelectedNo(JSON.parse(localStorage.getItem("selected")));
    }
  }, [props.coin]);

  return (
    <div className="overflow-y-auto h-[300px] max-h-[300px] rounded-5">
      <Table striped bordered hover className="p-0 m-0 bg-emerald-900">
        <thead>
          <tr >
            <th className="text-white" >#</th>
            <th className="text-white">SELECTED BET</th>
            <th className="text-white" >COIN</th>
          </tr>
        </thead>
        <tbody>
          {selectedNo &&
            selectedNo.map((item, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-emerald-700 text-white" : "bg-emerald-400 text-black"}
              >
                <td>{i + 1}</td>
                <td>{item.selectedbet}</td>
                <td>{item.coin}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ClickTable;
