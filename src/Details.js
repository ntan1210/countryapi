import { Component } from "react";
import Countrily from "countrily";
import { withRouter } from "react-router-dom";

class Details extends Component {
    constructor() {
        super();
        this.state = { loading: true };
    }
    async componentDidMount() {
        const iso2 = this.props.match.params.iso;
        var countryList = Countrily.all();
        countryList.map((country) => {
            if (country.ISO.alpha2 == iso2) {
                this.setState({ loading: false, details: country });
            }
        });
    }
    render() {
        const details = this.state.details;
        if (details == undefined) return <h2>Hello</h2>;
        else {
            console.log(details);
            const {
                nativeName,
                population,
                region,
                subregion,
                capital,
                tld,
                currencies,
                languages,
                borders,
            } = details;
            return (
                <h2>
                    {nativeName} - {population} - {region} - {subregion} -{" "}
                    {capital} - {currencies}
                </h2>
            );
        }
    }
}

export default withRouter(Details);
