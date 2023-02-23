import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import "./assets/css/style.css";
import banner from './assets/img/bannerhydra.png';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [bar, setBar] = useState(0);

  useEffect(() => {
    if (bar < 100) {
      setTimeout(() => setBar(bar + 10), 100);
    }
    if (bar >= 100) {
      setTimeout(() => setLoaded(true), 1500);
    }
  }, [bar, setBar]);

  if (true)
    return (
      <div className="App">
        <div className="d-flex vh-100 flex-column aligns-items-center justify-content-center text-center fondo">
          <div className="container">
            <img src={banner} alt="banner" className='img-fluid' />
            <br /><br />
            <Loader bar={bar} />
          </div>
        </div>
      </div>
    );

  return <div className="App"></div>;
}

export default App;
