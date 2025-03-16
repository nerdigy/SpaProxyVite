import { useState } from "react";
import "./App.css";

function App() {
    const [weather, setWeather] = useState("");

    async function onClick() {
        const response = await fetch("/api/weatherforecast");
        const data = await response.json();

        setWeather(JSON.stringify(data, null, 2));
    }

    return (
        <>
            <div>
            <button onClick={onClick}>Fetch data from server</button>
            <pre>
        {weather}
      </pre>
            </div>
        </>
    );
}

export default App;