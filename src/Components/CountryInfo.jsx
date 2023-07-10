const CountryCard = ({ name, population, region, capital, flag, alt }) => {
  return (
    <div className="country-card">
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
      </div>
    </div>
  );
};

export default CountryCard;
