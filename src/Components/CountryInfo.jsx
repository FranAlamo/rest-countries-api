import { Link } from "react-router-dom";
import { useState } from "react";
import { apiURL } from "../components/Api";

const CountryInfo = ({
  index,
  name,
  population,
  region,
  capital,
  flag,
  alt,
}) => {
  const [countries, setCountries] = useState([]);

  const removeCountry = (index) => {
    const newCountries = countries.filter((country, i) => i !== index);
    setCountries(newCountries);
  };

  const getCountryByName = async (name) => {
    try {
      const res = await fetch(`${apiURL}/name/${name}`);

      if (!res.ok) throw new Error("Could not found!");

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  return (
    <div className="details">
      <img src={flag} alt={alt} />
      <div className="details">
        <h4>{name}</h4>
        <p>
          <span className="subtitle">Population:</span> {population}
        </p>
        <p>
          <span className="subtitle">Region:</span> {region}
        </p>
        <p>
          <span className="subtitle">Capital:</span> {capital}
        </p>
        <div className="buttons">
          <Link
            to={`/countries/${name}`}
            className="btn"
            onClick={() => getCountryByName(name)}
          >
            Learn more
          </Link>
          <button className="btn" onClick={() => removeCountry(index)}>
            Remove Country
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
