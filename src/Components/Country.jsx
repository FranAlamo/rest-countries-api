import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { apiURL } from "../components/Api";
import "../styles/Country.css";

const Country = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { name } = useParams();
  const borders = country.map((country) => country.borders);

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`${apiURL}/name/${name}`);

        if (!res.ok) throw new Error("Could not found!");

        const data = await res.json();

        setCountry(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getCountryByName();
  }, [CountryInfo]);

  return (
    <div className="country">
      <Link to="/" className="btn btn-light">
        <i className="fas fa-arrow-left"></i> Back Home
      </Link>

      {country?.map((country, index) => (
        <div className="country-info-container" key={index}>
          <div className="country-info-img">
            <img src={country.flags.png} alt="" />
          </div>

          <div className="country-info">
            <h3>{country.name.common}</h3>

            <div className="country-info-left">
              <h5>
                Population:{" "}
                <span>
                  {new Intl.NumberFormat().format(country.population)}
                </span>
              </h5>
              <h5>
                Region: <span>{country.region}</span>
              </h5>
              <h5>
                Sub Region: <span>{country.subregion}</span>
              </h5>
              <h5>
                Capital: <span>{country.capital}</span>
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Country;
