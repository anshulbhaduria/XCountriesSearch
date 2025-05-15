import React, { useEffect, useState } from "react";
import styles from "./Countries.module.css";
import axios from "axios";
import Cards from "../cards/Cards";

function Countries() {
  const ENDPOINT =
    "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(ENDPOINT);
        const data = response.data;
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const filteredCountries = data.filter((country) =>
    country.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search for countries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className={styles.cardContainer}>
        {filteredCountries.map(({ common, png }) => {
          return <Cards key={common} name={common} flag={png} />;
        })}
      </div>
    </div>
  );
}

export default Countries;
