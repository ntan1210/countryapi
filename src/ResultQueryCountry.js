import CountryBox from "./CountryBox";

const ResultQueryCountry = (prop) => {
    return (
        <div className="country-list">
            {prop.countryList.map((country) => {
                const code = country.ISO;
                if (country.name != undefined) {
                    return (
                        <CountryBox
                            name={country.name}
                            population={country.population}
                            flagUrl={country.flag}
                            iso={code.alpha2}
                            region={country.region}
                            capital={country.capital}
                            key={country.name}
                        />
                    );
                }
            })}
        </div>
    );
};

export default ResultQueryCountry;
