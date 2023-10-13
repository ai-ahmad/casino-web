import DraggeableForm from "./DraggeableForm";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function RouletteMain () {

 
  const [mustSpin, setMustSpin] = useState(false);
  const [selectedNo, setSelectedNo] = useState([])
  return (

    <div>
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
        <DraggeableForm mustSpin={mustSpin} setMustSpin={setMustSpin} selectedNo={selectedNo} setSelectedNo={setSelectedNo} />
      </div>
    </div>

  );
}

export default RouletteMain;

