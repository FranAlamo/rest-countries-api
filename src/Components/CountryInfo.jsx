import { Link } from "react-router-dom";
const removeCountry = (index) => {
  const newCountry = countries.filter((country) => country.index !== index);
  setCountries(newCountry);
};
const CountryInfo = ({ name, population, region, capital, flag, alt }) => {
  return (
    <div className="details">
      <img src={flag} alt={alt} />
      <div className="country-info">
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
          <Link to={`/countries/${name}`} className="btn">
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
