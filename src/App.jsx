
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    let h = height / 100;
    let value = weight / (h * h);

    setBmi(value.toFixed(2));

    if (value < 18.5) {
      setResult("Underweight");
    } else if (value < 25) {
      setResult("Normal Weight");
    } else if (value < 30) {
      setResult("Overweight");
    } else {
      setResult("Obesity");
    }
  };

  return (
    <div style={{textAlign: "center",marginTop: "40px",backgroundColor: "#f3e8ff", minHeight: "100vh",padding: "20px",}}>
      <div style={{border: "2px solid #9333ea",borderRadius: "20px",padding: "30px",width: "300px", margin: "auto", backgroundColor: "#e9d5ff", }}>
        <h1 style={{ color: "#6b21a8", fontSize: 25 }}>
          BMI Calculator
        </h1>

        <input type="number"placeholder="Enter Weight (kg)"
          onChange={(e) => setWeight(e.target.value)}
          style={{padding: "10px", borderRadius: "8px",border: "1px solid #a855f7",}}/>

        <br /><br />

        <input type="number"placeholder="Enter Height (cm)"
          onChange={(e) => setHeight(e.target.value)}
          style={{padding: "10px",borderRadius: "8px", border: "1px solid #a855f7", }} />

        <br /><br />

        <button onClick={calculate}style={{backgroundColor: "#097c52",color: "white", padding: "10px 25px",border: "none",borderRadius: "8px",cursor: "pointer",}}>
          Calculate
        </button>

        <h2 style={{ color: "#6b21a8" }}>BMI: {bmi}</h2>

        <h3 style={{ color: "#7e22ce" }}>{result}</h3>
      </div>
    </div>
  );
}

export default App;

