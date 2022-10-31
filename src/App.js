import { useState } from 'react';
import './App.css';
import AboutTheProduct from './components/aboutTheProduct/AboutTheProduct';
import Benefits from './components/Benefits/Benefits';
import Delivery from './components/Delivery/Delivery';
import Footer from './components/footer/Footer';
import Header from './components/header/Header.jsx';
import HowIsTheOrder from './components/HowIstTeOrder/HowIstTeOrder';
import Order from './components/order/Order';
import Request from './components/request/Request';
import Reviews from './components/reviews/Reviews';
import Thanks from './components/thanks/Thanks';
function App() {
  const [activeRequest, setActiveRequest] = useState(false);
  const [activeThanks, setActiveThanks] = useState(false);
  console.log(activeThanks);
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Order />
        <AboutTheProduct activeRequest={setActiveRequest} />
        <Reviews />
        <Benefits />
        <Delivery />
        <HowIsTheOrder />
        <Footer activeThanks={setActiveThanks} />
        {activeRequest && <Request activeThanks={setActiveThanks} />}
        {activeThanks && <Thanks activeRequest={setActiveRequest} activeThanks={setActiveThanks} />}
      </div>
    </div>
  );
}

export default App;
