import { useState, useEffect } from "react";
import countrily from "countrily";
import ResultQueryCountry from "./ResultQueryCountry";

const REGION = ["Africa", "Americas", "Asia", "Europe", "Oceania", "All"];
let localCache = [];

const QueryCountry = () => {
    const [region, setRegion] = useState("");
    const [countryList, setCountryList] = useState("");
    const [searchCountryName, setSearchCountryName] = useState("");

    async function update() {
        if (localCache.length) {
            setCountryList(localCache);
            return;
        }
        const res = countrily.all();
        localCache = res;
        setCountryList(res);
    }

    function filterByRegion() {
        if (!region.length) return;
        let res;
        if (localCache.length) res = localCache;
        else res = countrily.all();
        if (region == "All") {
            setCountryList(res);
            return;
        }
        let regionMatching = [];
        res.map((country) => {
            if (country.region == region) {
                regionMatching.push(country);
            }
        });
        setCountryList(regionMatching);
    }

    function isMatch(x, y) {
        if (x == "" || y == "" || x == undefined || y == undefined)
            return false;
        x = x.toLowerCase();
        y = y.toLowerCase();
        for (var i = 0; i < Math.min(x.length, y.length); i++) {
            if (x[i] != y[i]) return false;
        }
        return true;
    }

    function filterByName() {
        if (!searchCountryName.length) return;
        console.log(searchCountryName);
        let nameMatching = [];
        localCache.map((country) => {
            if (isMatch(searchCountryName, country.name))
                nameMatching.push(country);
        });
        setCountryList(nameMatching);
    }

    useEffect(() => {
        update();
    }, []);

    useEffect(() => {
        filterByRegion();
    }, [region]);

    useEffect(() => {
        update();
        filterByName();
    }, [searchCountryName]);

    if (countryList.length) {
        return (
            <div>
                <div className="filter-bar">
                    <form
                        className="search-bar"
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("GOOD");
                        }}
                    >
                        <label>
                            <input
                                value={searchCountryName}
                                onChange={(e) =>
                                    setSearchCountryName(e.target.value)
                                }
                                onBlur={(e) =>
                                    setSearchCountryName(e.target.value)
                                }
                                placeholder="Search for a country..."
                            ></input>
                        </label>

                        <select
                            className="region-filter"
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}
                            onBlur={(e) => setRegion(e.target.value)}
                        >
                            <option value="">Filter by Region</option>
                            {REGION.map((region) => {
                                return (
                                    <option value={region} key={region}>
                                        {region}
                                    </option>
                                );
                            })}
                        </select>
                    </form>
                </div>

                <ResultQueryCountry countryList={countryList} />
            </div>
        );
    } else return <h1>Loading...</h1>;
};

export default QueryCountry;
