import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Countries from "./components/Contries";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((res) => res.data)
      .then((data) => setCountries(data));
  }, []);

  const filterCountries = countries.filter((item) =>
    item.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <label>Find countries</label>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      {search && (
        <Countries filterCountries={filterCountries} />
      )}
    </>
  );
}

export default App;
