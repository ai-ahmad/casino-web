import React from "react";
import ClickTable from "./ClickTable";
import Button from "react-bootstrap/Button";
import DropDown from "./DropDown";

const RouletteTable = (props) => {
  const handelselect = (e) => {
    const coin = JSON.parse(localStorage.getItem("coinvalue"));
    const bet = {
      selectedbet: e.target.id,
      coin: coin,
    };
    const availableCoin = props.coin - coin;
    props.setCoin(availableCoin);
    if (localStorage.getItem("selected")) {
      const available = JSON.parse(localStorage.getItem("selected"));
      const newlll = [...available, bet];
      localStorage.setItem("selected", JSON.stringify(newlll));
    } else {
      localStorage.setItem("selected", JSON.stringify([bet]));
    }
  };

  return (
    <div className="w-h-webkit">
      <div className="d-flex mb-3 gap-3">
        <Button variant="secondary">Your Coin {props.coin}</Button>
        <DropDown coin={props.coin} />
      </div>
      <div aria-disabled={props.disable}>
        <div className="roulletteTebale d-grid align-self-center bg-success mb-3 p-1">
          <button
            className="span-row-3 grid-item h-150-important btn btn-success"
            id="0"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            0
          </button>
          <button
            className="grid-item btn btn-danger"
            id="3"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            3
          </button>
          <button
            className="grid-item btn btn-dark"
            id="6"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            6
          </button>
          <button
            className="grid-item btn btn-danger"
            id="9"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            9
          </button>
          <button
            className="grid-item btn btn-danger"
            id="12"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            12
          </button>
          <button
            className="grid-item btn btn-dark"
            id="15"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            15
          </button>
          <button
            className="grid-item btn btn-danger"
            id="18"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            18
          </button>
          <button
            className="grid-item btn btn-danger"
            id="21"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            21
          </button>
          <button
            className="grid-item btn btn-dark"
            id="24"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            24
          </button>
          <button
            className="grid-item btn btn-danger"
            id="27"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            27
          </button>
          <button
            className="grid-item btn btn-danger"
            id="30"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            30
          </button>
          <button
            className="grid-item btn btn-dark"
            id="33"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            33
          </button>
          <button
            className="grid-item btn btn-danger"
            id="36"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            36
          </button>
          <button
            className="grid-item btn btn-success"
            id="3-COLUMN"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            3-COLUMN
          </button>

          <button
            className="grid-item btn btn-dark"
            id="2"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            2
          </button>
          <button
            className="grid-item btn btn-danger"
            id="5"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            5
          </button>
          <button
            className="grid-item btn btn-dark"
            id="8"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            8
          </button>
          <button
            className="grid-item btn btn-dark"
            id="11"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            11
          </button>
          <button
            className="grid-item btn btn-danger"
            id="14"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            14
          </button>
          <button
            className="grid-item btn btn-dark"
            id="17"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            17
          </button>
          <button
            className="grid-item btn btn-dark"
            id="20"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            20
          </button>
          <button
            className="grid-item btn btn-danger"
            id="23"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            23
          </button>
          <button
            className="grid-item btn btn-dark"
            id="26"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            26
          </button>
          <button
            className="grid-item btn btn-dark"
            id="29"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            29
          </button>
          <button
            className="grid-item btn btn-danger"
            id="32"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            32
          </button>
          <button
            className="grid-item btn btn-dark"
            id="35"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            35
          </button>
          <button
            className="grid-item btn btn-success"
            id="2-COLUMN"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            2-COLUMN
          </button>

          <button
            className="grid-item btn btn-danger"
            id="1"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            1
          </button>
          <button
            className="grid-item btn btn-dark"
            id="4"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            4
          </button>
          <button
            className="grid-item btn btn-danger"
            id="7"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            7
          </button>
          <button
            className="grid-item btn btn-dark"
            id="10"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            10
          </button>
          <button
            className="grid-item btn btn-dark"
            id="13"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            13
          </button>
          <button
            className="grid-item btn btn-danger"
            id="16"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            16
          </button>
          <button
            className="grid-item btn btn-danger"
            id="19"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            19
          </button>
          <button
            className="grid-item btn btn-dark"
            id="22"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            22
          </button>
          <button
            className="grid-item btn btn-danger"
            id="25"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            25
          </button>
          <button
            className="grid-item btn btn-dark"
            id="28"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            28
          </button>
          <button
            className="grid-item btn btn-dark"
            id="31"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            31
          </button>
          <button
            className="grid-item btn btn-danger"
            id="34"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            34
          </button>
          <button
            className="grid-item btn btn-success"
            id="1-COLUMN"
            onClick={(e) => handelselect(e)}
            disabled={props.coin <= 0}
          >
            1-COLUMN
          </button>

          <div className="span-1-12 d-flex justify-content-around">
            <button
              className="grid-item btn btn-success"
              id="1st---12"
              onClick={(e) => handelselect(e)}
              disabled={props.coin <= 0}
            >
              1st---12
            </button>
            <button
              className="grid-item btn btn-success"
              id="2nd---12"
              onClick={(e) => handelselect(e)}
              disabled={props.coin <= 0}
            >
              2nd---12
            </button>
            <button
              className="grid-item btn btn-success"
              id="3rd---12"
              onClick={(e) => handelselect(e)}
              disabled={props.coin <= 0}
            >
              3rd---12
            </button>
          </div>

          <div className="span-1-12 d-flex justify-content-around">
            <button
              className="grid-item btn btn-success"
              id="1 TO 18"
              onClick={(e) => handelselect(e)}
              disabled={props.coin <= 0}
            >
              1 TO 18
            </button>
            <button
              className="grid-item btn btn-success"
              id="EVEN"
              onClick={(e) => handelselect(e)}
              disabled={props.coin <= 0}
            >
              EVEN
            </button>
            <button
              className="grid-item btn btn-danger"
              id="RED"
              onClick={(e) => handelselect(e)}
              disabled={props.coin <= 0}
            >
              RED
            </button>
            <button
              className="grid-item btn btn-dark"
              id="BLACK"
              onClick={(e) => handelselect(e)}
              disabled={props.coin <= 0}
            >
              BLACK
            </button>
            <button
              className="grid-item btn btn-success"
              id="OAD"
              onClick={(e) => handelselect(e)}
              disabled={props.coin <= 0}
            >
              OAD
            </button>
            <button
              className="grid-item btn btn-success"
              id="19 TO 36"
              onClick={(e) => handelselect(e)}
              disabled={props.coin <= 0}
            >
              19 TO 36
            </button>
          </div>
        </div>
        <div className="w-50 m-auto">
          <ClickTable selectedNo={props.selectedNo} coin={props.coin} />
        </div>
      </div>
    </div>
  );
};

export default RouletteTable;
