import CountryList from "./CountryList"

const DisplayCountry = ({countries, detailedCountry, setDetailedCountry}) => {
    if(countries.length < 1){
      return(<></>)
    }
    else if(countries.length === 1){
      const country = countries[0]
      setDetailedCountry(country)
    }
    else{
        const compare = (c1, c2) => {
            if(c1.name.common > c2.name.common){
                return 1
            }
            else{
                return -1
            }
        }
        countries.sort(compare)
        return(
            <div className="countryList">
                <ol>
                    {countries.map(country => <li key={country.name.common}>
                        <CountryList key={country.name.common} country={country} setDetailedCountry={setDetailedCountry} />
                    </li>)}
                </ol>
            </div>
        )
    }
}

export default DisplayCountry