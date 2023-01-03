import axios from "axios"
import { useState, useEffect } from "react"

import Weather from './components/Weather'
import DisplayCountry from "./components/DisplayCountry"
import CountryDetails from "./components/CountryDetails"

import './styles.css'


const App = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')
  const [detailedCountry, setDetailedCountry] = useState({})

  const onQueryChange = (event) => {
    console.log(event.target.value)
    setDetailedCountry({})
    setQuery(event.target.value)
  }

  useEffect(() => {
    console.log('effect')
    axios.get('https://restcountries.com/v3.1/all')
    .then((response) => {
      console.log('promise fulfilled')
      console.log(response)
      setCountries(response.data)
    })
  }, [])

  const countriesToShow = countries.filter((country) => {
    const name = country.name.common.toLowerCase()

    return name.includes(query.toLowerCase())
  })

  return(
    <div>
      <h1 className="title">Search Country Details</h1>
      <div className="form">
        find countries <input type='text' value={query} onChange={onQueryChange} placeholder='type country name'/>
      </div>
      <hr></hr>
      <DisplayCountry countries={countriesToShow} detailedCountry={detailedCountry} setDetailedCountry={setDetailedCountry} />
      <hr></hr>
      <CountryDetails country={detailedCountry} />
      <Weather country={detailedCountry}/>
    </div>
  )
}

export default App