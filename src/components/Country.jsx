import React from "react";

const Country = ({ countryInfo }) => {
  const languages = Object.values(countryInfo.languages);
  


  return (
    <>
      <h1>{countryInfo.name.common}</h1>
      <p> Capital {countryInfo.capital}</p>
      <p> area {countryInfo.area}</p>
      <p>
        <strong>Langueges</strong>
      </p>
      <ul>
        {languages.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <img src={countryInfo.flags.png} alt={countryInfo.flags.alt} />
    </>
  );
};

export default Country;
