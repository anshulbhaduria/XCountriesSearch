import React, { useEffect, useState } from "react";
import styles from "./Countries.module.css";
import Cards from "../cards/Cards";
import axios from "axios";

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
      <div className={styles.countryCard}>
        {filteredCountries.length > 0 ? (
          filteredCountries.map(({ common, png }) => (
            <Cards key={common} name={common} flag={png} />
          ))
        ) : (
          <p>No countries found</p>
        )}
      </div>
    </div>
  );
}

export default Countries;
