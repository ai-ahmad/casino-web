import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import Ween from "./Ween";


const Roulette = (props) => {


  const [prizeNumber, setPrizeNumber] = useState(0);
  const [oadEven, setOadEven] = useState("OAD/EVEN")
  const [redBlack, setReadBlack] = useState("RED/BLACK")
  const [rouletteData, setRouletteData] = useState(props.data);
  const [result, setResult] = useState([])
  const [dozen, setDozen] = useState("DOZEN")
  const [half, setHalf] = useState("HALF")
  const [column, setColumn] = useState("COLUMN")
  const [ween, setWeen] = useState([])




  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * props.data.length);
    // const newPrizeNumber = prompt("please enter Number")
    if (newPrizeNumber == 32) {
      setPrizeNumber(1);
      setOadEven("EVEN")
      setReadBlack("RED")
      setDozen("3nd---12")
      setHalf("19 TO 36")
      setColumn("2-COLUMN")
    } else if (newPrizeNumber == 5) {
      setPrizeNumber(19)
      setOadEven("OAD")
      setReadBlack("RED")
      setDozen("1st---12")
      setColumn("2-COLUMN")
    } else if (newPrizeNumber == 15) {
      setPrizeNumber(2)
      setOadEven("OAD")
      setReadBlack("BLACK")
      setDozen("2nd---12")
      setHalf("1 TO 18")
      setColumn("3-COLUMN")
    } else if (newPrizeNumber == 24) {
      setPrizeNumber(20)
      setOadEven("EVEN")
      setReadBlack("BLACK")
      setDozen("2nd---12")
      setHalf("19 TO 36")
      setColumn("3-COLUMN")
    } else if (newPrizeNumber == 19) {
      setPrizeNumber(3)
      setOadEven("OAD")
      setReadBlack("RED")
      setDozen("2nd---12")
      setHalf("19 TO 36")
      setColumn("1-COLUMN")
    } else if (newPrizeNumber == 16) {
      setPrizeNumber(21)
      setOadEven("EVEN")
      setReadBlack("RED")
      setDozen("2nd---12")
      setHalf("1 TO 18")
      setColumn("1-COLUMN")
    } else if (newPrizeNumber == 4) {
      setPrizeNumber(4)
      setOadEven("EVEN")
      setReadBlack("BLACK")
      setDozen("1st---12")
      setHalf("1 TO 18")
      setColumn("1-COLUMN")
    } else if (newPrizeNumber == 33) {
      setPrizeNumber(22)
      setOadEven("OAD")
      setReadBlack("BLACK")
      setDozen("3rd---12")
      setHalf("19 TO 36")
      setColumn("3-COLUMN")
    } else if (newPrizeNumber == 21) {
      setPrizeNumber(5)
      setOadEven("OAD")
      setReadBlack("RED")
      setDozen("2nd---12")
      setHalf("19 TO 36")
      setColumn("3-COLUMN")
    } else if (newPrizeNumber == 1) {
      setPrizeNumber(23)
      setOadEven("OAD")
      setReadBlack("RED")
      setDozen("1st---12")
      setHalf("1 TO 18")
      setColumn("1-COLUMN")
    } else if (newPrizeNumber == 2) {
      setPrizeNumber(6)
      setOadEven("EVEN")
      setReadBlack("BLACK")
      setDozen("1st---12")
      setHalf("1 TO 18")
      setColumn("2-COLUMN")
    } else if (newPrizeNumber == 20) {
      setPrizeNumber(24)
      setOadEven("EVEN")
      setReadBlack("BLACK")
      setDozen("2nd---12")
      setHalf("19 TO 36")
      setColumn("2-COLUMN")
    } else if (newPrizeNumber == 25) {
      setPrizeNumber(7)
      setOadEven("OAD")
      setReadBlack("RED")
      setDozen("2nd---12")
      setHalf("19 TO 36")
      setColumn("1-COLUMN")
    } else if (newPrizeNumber == 14) {
      setPrizeNumber(25)
      setOadEven("EVEN")
      setReadBlack("RED")
      setDozen("2nd---12")
      setHalf("1 TO 18")
      setColumn("2-COLUMN")
    } else if (newPrizeNumber == 17) {
      setPrizeNumber(8)
      setOadEven("OAD")
      setReadBlack("BLACK")
      setDozen("2nd---12")
      setHalf("1 TO 18")
      setColumn("2-COLUMN")
    } else if (newPrizeNumber == 31) {
      setPrizeNumber(26)
      setOadEven("OAD")
      setReadBlack("BLACK")
      setDozen("3rd---12")
      setHalf("19 TO 36")
      setColumn("1-COLUMN")
    } else if (newPrizeNumber == 34) {
      setPrizeNumber(9)
      setOadEven("EVEN")
      setReadBlack("RED")
      setDozen("3rd---12")
      setHalf("19 TO 36")
      setColumn("1-COLUMN")
    } else if (newPrizeNumber == 9) {
      setPrizeNumber(27)
      setOadEven("OAD")
      setReadBlack("RED")
      setDozen("1st---12")
      setHalf("1 TO 18")
      setColumn("3-COLUMN")
    } else if (newPrizeNumber == 6) {
      setPrizeNumber(10)
      setOadEven("EVEN")
      setReadBlack("BLACK")
      setDozen("1st---12")
      setHalf("1 TO 18")
      setColumn("3-COLUMN")
    } else if (newPrizeNumber == 22) {
      setPrizeNumber(28)
      setOadEven("EVEN")
      setReadBlack("BLACK")
      setDozen("2nd---12")
      setHalf("19 TO 36")
      setColumn("1-COLUMN")
    } else if (newPrizeNumber == 27) {
      setPrizeNumber(11)
      setOadEven("OAD")
      setReadBlack("RED")
      setDozen("3rd---12")
      setHalf("19 TO 36")
      setColumn("3-COLUMN")
    } else if (newPrizeNumber == 18) {
      setPrizeNumber(29)
      setOadEven("EVEN")
      setReadBlack("RED")
      setDozen("2nd---12")
      setHalf("1 TO 18")
      setColumn("3-COLUMN")
    } else if (newPrizeNumber == 13) {
      setPrizeNumber(12)
      setOadEven("OAD")
      setReadBlack("BLACK")
      setDozen("2nd---12")
      setHalf("1 TO 18")
      setColumn("1-COLUMN")
    } else if (newPrizeNumber == 29) {
      setPrizeNumber(30)
      setOadEven("OAD")
      setReadBlack("BLACK")
      setDozen("2nd---12")
      setHalf("19 TO 36")
      setColumn("2-COLUMN")
    } else if (newPrizeNumber == 36) {
      setPrizeNumber(13)
      setOadEven("EVEN")
      setReadBlack("RED")
      setDozen("3rd---12")
      setHalf("19 TO 36")
      setColumn("3-COLUMN")
    } else if (newPrizeNumber == 7) {
      setPrizeNumber(31)
      setOadEven("OAD")
      setReadBlack("RED")
      setDozen("1st---12")
      setHalf("1 TO 18")
      setColumn("1-COLUMN")
    } else if (newPrizeNumber == 11) {
      setPrizeNumber(14)
      setOadEven("OAD")
      setReadBlack("BLACK")
      setDozen("1st---12")
      setHalf("1 TO 18")
      setColumn("2-COLUMN")
    } else if (newPrizeNumber == 28) {
      setPrizeNumber(32)
      setOadEven("EVEN")
      setReadBlack("BLACK")
      setDozen("3rd---12")
      setHalf("19 TO 36")
      setColumn("1-COLUMN")
    } else if (newPrizeNumber == 30) {
      setPrizeNumber(15)
      setOadEven("EVEN")
      setReadBlack("RED")
      setDozen("3rd---12")
      setHalf("19 TO 36")
      setColumn("3-COLUMN")
    } else if (newPrizeNumber == 12) {
      setPrizeNumber(33)
      setOadEven("OAD")
      setReadBlack("RED")
      setDozen("1st---12")
      setHalf("1 TO 18")
      setColumn("3-COLUMN")
    } else if (newPrizeNumber == 8) {
      setPrizeNumber(16)
      setOadEven("EVEN")
      setReadBlack("BLACK")
      setDozen("1st---12")
      setHalf("1 TO 18")
      setColumn("2-COLUMN")
    } else if (newPrizeNumber == 35) {
      setPrizeNumber(34)
      setOadEven("OAD")
      setReadBlack("BLACK")
      setDozen("3rd---12")
      setHalf("19 TO 36")
      setColumn("2-COLUMN")
    } else if (newPrizeNumber == 23) {
      setPrizeNumber(17)
      setOadEven("OAD")
      setReadBlack("RED")
      setDozen("2nd---12")
      setHalf("19 TO 36")
      setColumn("2-COLUMN")
    } else if (newPrizeNumber == 3) {
      setPrizeNumber(35)
      setOadEven("OAD")
      setReadBlack("RED")
      setDozen("1st---12")
      setHalf("1 TO 18")
      setColumn("3-COLUMN")
    } else if (newPrizeNumber == 10) {
      setPrizeNumber(18)
      setOadEven("EVEN")
      setReadBlack("BLACK")
      setDozen("1st---12")
      setHalf("1 TO 18")
      setColumn("1-COLUMN")
    } else if (newPrizeNumber == 26) {
      setPrizeNumber(36)
      setOadEven("EVEN")
      setReadBlack("BLACK")
      setDozen("3rd---12")
      setHalf("19 TO 36")
      setColumn("2-COLUMN")
    } else {
      setPrizeNumber(0); setOadEven("00"); setReadBlack("00"); setDozen("00"); setHalf("00")
    }
    props.setMustSpin(true);
    if (props.mustSpin) {
      return ""
    } else {
      setResult([(newPrizeNumber), ...result])
    }

  }


  useEffect(() => {
    if (localStorage.getItem('selected')) {
      if (!props.mustSpin) {
        const localSelect = JSON.parse(localStorage.getItem('selected'))
        const wine = localSelect.filter(e => e.selectedbet == rouletteData[prizeNumber].completeOption | e.selectedbet == oadEven | e.selectedbet == redBlack | e.selectedbet == dozen | e.selectedbet == half | e.selectedbet == column).map(filteredarray => (
          { number: filteredarray.selectedbet, coin: filteredarray.coin }
        ))
        setWeen(wine)
      }
    }
  }, [props.mustSpin])

  useEffect(() => {
    const addShortString = props.data.map((item) => {
      return {
        completeOption: item.text,
        option:
          item.text.length >= 30
            ? item.text.substring(0, 30).trimEnd() + "..."
            : item.text
      };
    });
    setRouletteData(addShortString);
  }, [props.data]);



  return (
    <div>
      <Ween mustSpin={props.mustSpin} coin={props.coin} setCoin={props.setCoin} ween={ween} setWeen={setWeen} numberween={rouletteData[prizeNumber].completeOption} oadEven={oadEven} redBlack={redBlack} dozen={dozen} half={half} column={column} />
      <div className="d-flex flex-column justify-content-center main-form">
        <div className="d-flex gap-2 overflow-hidden w-550">
          {props.mustSpin ? "" :
            result.map((item, i) => (
              <p key={i} className={`w-2rem ${item == "32" | item == "19" | item == "21" | item == "25" | item == "34" | item == "27" | item == "36" | item == "30" | item == "23" | item == "5" | item == "16" | item == "1" | item == "14" | item == "9" | item == "18" | item == "12" | item == "3" ? "btn-bg-red color-white" : item == "0" ? "btn-bg-green color-white" : "btn-bg-black color-white"}`}>{item}</p>
            ))
          }
        </div>
        <div align="center" className="roulette-container">
          <Wheel
            mustStartSpinning={props.mustSpin}
            spinDuration={[2]}
            prizeNumber={prizeNumber}
            data={rouletteData}
            outerBorderColor={["#ccc"]}
            outerBorderWidth={[9]}
            innerBorderColor={["#f2f2f2"]}
            radiusLineColor={["tranparent"]}
            radiusLineWidth={[1]}
            textColors={["#f5f5f5"]}
            textDistance={55}
            fontSize={[10]}
            backgroundColors={[
              "#157b50",
              "#bc0101",
              "#000000",
              "#bc0101",
              "#000000",
              "#bc0101",
              "#000000",
              "#bc0101",
              "#000000",
              "#bc0101",
              "#000000",
              "#bc0101",
              "#000000",
              "#bc0101",
              "#000000",
              "#bc0101",
              "#000000",
              "#bc0101",
              "#000000",
              "#bc0101",
              "#000000",
              "#bc0101",
              "#000000",
              "#bc0101",
              "#000000",
              "#bc0101",
              "#000000",
              "#bc0101",
              "#000000",
              "#bc0101",
              "#000000",
              "#bc0101",
              "#000000",
              "#bc0101",
              "#000000",
              "#bc0101",
              "#000000"
            ]}
            onStopSpinning={() => {
              props.setMustSpin(false);
            }}
          />
          <button className="button roulette-button" onClick={handleSpinClick}>
            Spine
          </button>
        </div>
        <br />
        <div >
          <button
            className="prize-message"
            onClick={handleSpinClick}
            disabled={props.mustSpin}
          >
            {!props.mustSpin ? rouletteData[prizeNumber].completeOption : "Spinning..."}
          </button>
          <button
            className="prize-message"
            onClick={handleSpinClick}
            disabled={props.mustSpin}
          >
            {!props.mustSpin ? oadEven : "Spinning..."}
          </button>
          <button
            className={`prize-message ${props.mustSpin ? "" : redBlack === "RED" ? "btn-bg-red" : redBlack === "BLACK" ? "btn-bg-black" : ""}`}
            onClick={handleSpinClick}
            disabled={props.mustSpin}
          >
            {!props.mustSpin ? redBlack : "Spinning..."}
          </button>
          <button
            className={`prize-message`}
            onClick={handleSpinClick}
            disabled={props.mustSpin}
          >
            {!props.mustSpin ? dozen : "Spinning..."}
          </button>
          <button
            className={`prize-message`}
            onClick={handleSpinClick}
            disabled={props.mustSpin}
          >
            {!props.mustSpin ? half : "Spinning..."}
          </button>
          <button
            className={`prize-message`}
            onClick={handleSpinClick}
            disabled={props.mustSpin}
          >
            {!props.mustSpin ? column : "Spinning..."}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Roulette;
