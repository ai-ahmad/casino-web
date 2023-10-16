import React, { useState, useEffect } from "react";

function RouletteWheel({ result }) {
  // Define the possible wheel numbers/colors here
  const wheelNumbers = [
    "0",
    "32",
    "15",
    "19",
    "4",
    "21",
    "2",
    "25",
    "17",
    "34",
    "6",
    "27",
    "13",
    "36",
    "11",
    "30",
    "8",
    "23",
    "10",
    "5",
    "24",
    "16",
    "33",
    "1",
    "20",
    "14",
    "31",
    "9",
    "22",
    "18",
    "29",
    "7",
    "28",
    "12",
    "35",
    "3",
    "26",
  ];

  // Define the colors for each number
  const numberColors = {
    0: "green",
    32: "red",
    15: "black",
    // Add more colors here
  };

  // Create a CSS class for each number/color
  const getNumberClass = (number) => {
    const color = numberColors[number];
    return `text-${color}-500`;
  };

  // Simulate the spinning animation
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    if (spinning) {
      // Simulate the spinning animation
      const spinInterval = setInterval(() => {
        // Implement spinning animation logic here
      }, 100);

      // Simulate stopping the wheel after a few seconds
      setTimeout(() => {
        const randomResult =
          wheelNumbers[Math.floor(Math.random() * wheelNumbers.length)];
        setSpinning(false);
        clearInterval(spinInterval);
      }, 3000); // Simulated 3-second spin

      return () => clearInterval(spinInterval);
    }
  }, [spinning]);

  return (
    <div className={`roulette-wheel ${spinning ? "spin" : ""}`}>
      {wheelNumbers.map((number, index) => (
        <div
          key={index}
          className={`wheel-number ${getNumberClass(number)}`}
          style={{
            transform: `rotate(${
              index * (360 / wheelNumbers.length)
            }deg) translateY(-100px)`,
          }}
        >
          {number}
        </div>
      ))}
    </div>
  );
}

export default RouletteWheel;
