import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import "./assets/css/style.css";
import logo from "./assets/img/hydralogo.jpg";

function App() {
  const [loaded, setLoaded] = useState(false)
  const [bar, setBar] = useState(0);


  useEffect(() => {
    if (bar < 100) {
      setTimeout(() => setBar(bar + 10), 100)
    }
    if (bar >= 100) {
      setTimeout(() => setLoaded(true), 1500)
    }
  }, [bar, setBar]);

  if (true) return (
    <div className="App">
      <div className="d-flex vh-100 aligns-items-center justify-content-center text-center fondo">

          <h2 className="banner-mc">HYDRACRAFT</h2>
          <h5 className="network">NETWORK</h5>

        <Loader bar={bar} />
      </div>

    </div>
  )

  return (
    <div className="App">

    </div>
  )


}

export default App
