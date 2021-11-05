import ReactCountryFlag from "react-country-flag";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CountryBox = (prop) => {
    if (prop.capital == undefined) prop.capital = "";
    if (prop.population == undefined) prop.population = "";
    let populationFormated =
        prop.population != undefined
            ? numberWithCommas(prop.population)
            : "undefined";
    return (
        <div className="rectangle">
            <a href={`/details/${prop.iso}`}>
                <ReactCountryFlag
                    className="flag-image"
                    svg
                    style={{
                        width: "264px",
                        height: "180px",
                    }}
                    countryCode={prop.iso}
                />
                <h3 className="country-name">{prop.name}</h3>
                <div className="gen-info-container">
                    <h4 className="gen-info">
                        <strong>Population: </strong>
                        {populationFormated}
                    </h4>
                    <h4 className="gen-info">
                        <strong>Region:</strong> {prop.region}
                    </h4>
                    <h4 className="gen-info">
                        <strong>Capital:</strong> {prop.capital}
                    </h4>
                </div>
            </a>
        </div>
    );
};

export default CountryBox;
