import React from "react";
import "./App.css";
import CampaignList from "./campaign-landing/landing";

function App() {
  return (
    <div className="App">
      <header>
      <div className="App-header">
        <div style={{"float" : "left" }}>Spotlight</div>
      </div>
        <CampaignList />
      </header>
    </div>
  );
}

export default App;
