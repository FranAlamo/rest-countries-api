import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { apiURL } from "../components/Api";
import "../styles/Country.css";

const Country = () => {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { name } = useParams();

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`${apiURL}/name/${name}`);

        if (!res.ok) throw new Error("Country not found!");

        const data = await res.json();
        setCountry(data[0]);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getCountryByName();
  }, [name]);

  return (
    <div className="country">
      <Link to="/" className="btn btn-light">
        <i className="fas fa-arrow-left"></i> Back Home
      </Link>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="country-info-container">
          <div className="country-info-img">
            <img src={country?.flags?.png} alt="" />
          </div>
          <div className="country-info">
            <h3>{country?.name?.common}</h3>
            <div className="country-info-left">
              <h5>
                Native Name: <span>{country?.name?.native?.common}</span>
              </h5>
              <h5>
                Top Level Domain: <span>{country?.tld?.[0] || "N/A"}</span>
              </h5>
              <h5>
                Population:{" "}
                <span>
                  {new Intl.NumberFormat().format(country?.population)}
                </span>
              </h5>
              <h5>
                Currencies:{" "}
                <span>
                  {Object.values(country?.currencies || {}).join(", ") || "N/A"}
                </span>
              </h5>
              <h5>
                Region: <span>{country?.region}</span>
              </h5>
              <h5>
                Language(s):{" "}
                <span>
                  {Object.values(country?.languages || {}).join(", ") || "N/A"}
                </span>
              </h5>
              <h5>
                Subregion: <span>{country?.subregion}</span>
              </h5>
              <h5>
                Capital: <span>{country?.capital}</span>
              </h5>
              <h5>
                Border Countries:{" "}
                <span>
                  {country?.borders?.length > 0
                    ? country?.borders.join(", ")
                    : "N/A"}
                </span>
              </h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
