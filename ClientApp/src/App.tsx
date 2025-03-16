import { useState } from "react";
import { ofetch } from "ofetch";
import "./App.css";

function App() {
  const [response, setResponse] = useState("");
  async function onClick() {
    const data = await ofetch("/api/weather");
    setResponse(JSON.stringify(data));
  }

  return (
    <>
      <button onClick={onClick}>Fetch data from server</button>
      <pre>
        <code>{response}</code>
      </pre>
    </>
  );
}

export default App;
