import React from "react";

const api = {
  key: "api key",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return ( 
    <div className="app">
    <main>
    <div className="search-box">
    <input type = "text"
    className = "seach-bar"
    placeholder = "Search..."
    />
    </div> 
    </main> 
    </div>
  );
}

export default App;