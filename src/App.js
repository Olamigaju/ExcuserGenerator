import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://excuser-three.vercel.app/v1/excuse/";

function App() {
  const [excuses, setExcuses] = useState("");

  const excuseApi = async (excuse) => {
    const response = await fetch(`${API_URL}${excuse}`);
    const data = await response.json();
    setExcuses(data[0].excuse);
  };

  useEffect(() => {
    excuseApi(excuses);
  }, []);
  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={() => excuseApi("party")}>Party</button>
      <button onClick={() => excuseApi("office")}>Office</button>
      <button onClick={() => excuseApi("family")}>family</button>

      <p>{excuses}</p>
    </div>
  );
}

export default App;
