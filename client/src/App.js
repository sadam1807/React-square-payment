import React, { useState, useEffect } from 'react';
import './App.css';
import Square from './Component/Square';

function App() {
  const [isLoad, setLoad] = useState(false);
  useEffect(() => {
    let sqPaymentScript = document.createElement("script");
    sqPaymentScript.src = "https://js.squareupsandbox.com/v2/paymentform";
    sqPaymentScript.type = "text/javascript";
    sqPaymentScript.async = false;
    sqPaymentScript.onload = () => {
      setLoad(true);
    };
    document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
  });

  const squarePayment = isLoad ? (
        <Square paymentForm={ window.SqPaymentForm }/>
    ) : (
       null
    )

  return (
    <div className="App">
        <h1>Square</h1>
       {squarePayment}
    </div>
  );
}

export default App;
