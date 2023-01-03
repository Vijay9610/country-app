// Component to display data of one country with show button
const CountryList = ({country, setDetailedCountry}) => {
  
    const onShow = () => {
      setDetailedCountry(country)
    }
    return(
      <div className="countryItem">
        <span id="span">{country.name.common}</span>
        <button onClick={onShow} id='show'>show</button>
      </div>
    )
}

export default CountryList