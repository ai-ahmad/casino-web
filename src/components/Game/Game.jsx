import DraggeableForm from "./DraggeableForm";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function Game() {
  const [mustSpin, setMustSpin] = useState(false);
  const [selectedNo, setSelectedNo] = useState([]);
  return (
    <div className="bg-[url('https://media.istockphoto.com/id/854509336/photo/dark-purple-casino-games.webp?b=1&s=170667a&w=0&k=20&c=EFu2b2uAHP1a0uj3TNxWXLtrpQUUUJISIP1AURgXt2U=')] bg-opacity-70 bg-no-repeat bg-cover">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="App">
        <DraggeableForm
          mustSpin={mustSpin}
          setMustSpin={setMustSpin}
          selectedNo={selectedNo}
          setSelectedNo={setSelectedNo}
        />
      </div>
    </div>
  );
}

export default Game;
