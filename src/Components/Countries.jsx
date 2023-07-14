import React, { useEffect, useState } from "react";
import CountryInfo from "./CountryInfo";
import { apiURL } from "../components/Api";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiURL}/all`);
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <main>
        <div className="grid">
          {countries.map((country, index) => (
            <CountryInfo
              key={index}
              name={country.name.common}
              population={country.population}
              capital={country.capital}
              region={country.region}
              flag={country.flags?.png}
              alt={country.flags?.alt}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Countries;
