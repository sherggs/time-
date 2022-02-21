import React, { useState } from "react";

function App() {
  setInterval(currentTime, 1000);
const now = new Date().toLocaleTimeString();
const [time, setTime] = useState(now);

function currentTime(){
  const updated = new Date().toLocaleTimeString();
  setTime(updated);

};
  return (
    <div className="container">
      <h1 >{time}</h1>
      <p onClick={currentTime}>Time by 2122998</p>
    </div>
  );
}

export default App;
