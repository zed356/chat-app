import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const d = await fetch("/api");
      const res = await d.json();
      setData(res.message);
    })();
  }, []);

  return (
    <div>
      <p>{data || "Loading..."}</p>
    </div>
  );
}

export default App;
