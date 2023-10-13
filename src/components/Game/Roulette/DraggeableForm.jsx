import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Roulette from "./Roulette";
import RouletteTable from "./RouletteTable";



const FormularioTexto = (props) => {
  const [coin, setCoin] = useState(1000)

  const [inputList, setInputList] = useState([
    {
      id: uuidv4(),
      text: "0",
    },
    {
      id: uuidv4(),
      text: "32",
    },
    {
      id: uuidv4(),
      text: "15",
    },
    {
      id: uuidv4(),
      text: "19"
    },
    {
      id: uuidv4(),
      text: "4"
    },
    {
      id: uuidv4(),
      text: "21"
    },
    {
      id: uuidv4(),
      text: "2"
    },
    {
      id: uuidv4(),
      text: "25"
    },
    {
      id: uuidv4(),
      text: "17"
    },
    {
      id: uuidv4(),
      text: "34"
    },
    {
      id: uuidv4(),
      text: "6"
    },
    {
      id: uuidv4(),
      text: "27"
    },
    {
      id: uuidv4(),
      text: "13"
    },
    {
      id: uuidv4(),
      text: "36"
    },
    {
      id: uuidv4(),
      text: "11"
    },
    {
      id: uuidv4(),
      text: "30"
    },
    {
      id: uuidv4(),
      text: "8"
    },
    {
      id: uuidv4(),
      text: "23"
    },
    {
      id: uuidv4(),
      text: "10"
    },
    {
      id: uuidv4(),
      text: "5"
    },
    {
      id: uuidv4(),
      text: "24"
    },
    {
      id: uuidv4(),
      text: "16"
    },
    {
      id: uuidv4(),
      text: "33"
    },
    {
      id: uuidv4(),
      text: "1"
    },
    {
      id: uuidv4(),
      text: "20"
    },
    {
      id: uuidv4(),
      text: "14"
    },
    {
      id: uuidv4(),
      text: "31"
    },
    {
      id: uuidv4(),
      text: "9"
    },
    {
      id: uuidv4(),
      text: "22"
    },
    {
      id: uuidv4(),
      text: "18"
    },
    {
      id: uuidv4(),
      text: "29"
    },
    {
      id: uuidv4(),
      text: "7"
    },
    {
      id: uuidv4(),
      text: "28"
    },
    {
      id: uuidv4(),
      text: "12"
    },
    {
      id: uuidv4(),
      text: "35"
    },
    {
      id: uuidv4(),
      text: "3"
    },
    {
      id: uuidv4(),
      text: "26"
    }
  ]);

  useEffect(() => {
    if (localStorage.getItem('totle')) {
      const addMonew = JSON.parse(localStorage.getItem('totle'))
      const newcoin = coin + addMonew
      setCoin(newcoin)
      console.log(newcoin)
    }
  }, [!props.mustSpin])

  return (
    <div className="">

      <div className="text-title">
        <h2>Roulette</h2>
      </div>

      

      {/*  */}
      <div className="d-flex gap-5">
        <Roulette data={inputList} setMustSpin={props.setMustSpin} mustSpin={props.mustSpin} selectedNo={props.selectedNo} coin={coin} setCoin={setCoin} />
        <RouletteTable coin={coin} setCoin={setCoin} setMustSpin={props.setMustSpin} mustSpin={props.mustSpin} setSelectedNo={props.setSelectedNo} selectedNo={props.selectedNo} />
      </div>

    </div>
  );
};

export default FormularioTexto;