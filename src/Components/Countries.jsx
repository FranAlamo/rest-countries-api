import React, { useEffect, useState } from "react";
import CountryInfo from "./CountryInfo";
import { apiURL } from "../components/Api";
import { Link } from "react-router-dom";
import "../styles/index.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]); // Initialize as empty array
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiURL}/all`);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) => {
        const regionMatches =
          selectedRegion === "" ||
          country.region.toLowerCase() === selectedRegion.toLowerCase();
        const countryMatches =
          selectedCountry === "" ||
          country.name.common
            .toLowerCase()
            .includes(selectedCountry.toLowerCase());

        return regionMatches && countryMatches;
      })
    );
  }, [selectedRegion, selectedCountry]);

  return (
    <div>
      <main>
        <nav className="filter">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              type="text"
              placeholder="Search for a country..."
            />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option disabled value="">
                Filter by Region
              </option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </form>
        </nav>
        <div className="grid">
          {filteredCountries.map((country, index) => (
            <Link to={`/${index}`} key={index}>
              <CountryInfo
                name={country.name.common}
                population={country.population}
                capital={country.capital}
                region={country.region}
                flag={country.flags.png}
                alt={country.flags.alt}
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Countries;
