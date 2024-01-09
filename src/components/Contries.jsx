import React from 'react'
import Country from './Country';

const Countries = ({filterCountries}) => {
  return (
    <div>
      {filterCountries.length === 1 ? (
        <Country countryInfo={filterCountries[0]}/>
      ) : filterCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        filterCountries.map((item) => (
          <div key={item.name.common}>{item.name.common}</div>
        ))
      )}
    </div>
  );
}

export default Countries