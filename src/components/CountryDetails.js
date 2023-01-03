const CountryDetails = ({country}) => {
    if(Object.keys(country).length === 0){
      return <></>
    }
    return (
      <div className="countryDetails">
          <h2 id="countryName">{country.name.common}</h2>
          <p id="capital">capital <span>{country.capital[0]}</span></p>
          <p id="area">area <span>{country.area}</span></p>
          <h3>languages:</h3>
          <ul id="language">
            {
              Object.values(country.languages).map(language => <li key={language}>{language}</li>)
            }
          </ul>
          <img id="flag" src={country.flags.png} alt={`${country.name.common} flag`} />
      </div>
    )
}

export default CountryDetails