import React from 'react';
import currencies from '../utils/currencies';
import { checkStatus, json } from '../utils/fetchUtils';
import CurrencyTable from '../components/CurrencyTable';
import CurrencyConverter from '../components/CurrencyConverter';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      base: 'USD',
      rates: null,
    };
  }

  componentDidMount() {
    this.getRatesData(this.state.base);
  }

  changeBase = (event) => {
    this.setState({ base: event.target.value });
    this.getRatesData(event.target.value);
  };

  getRatesData = (base) => {
    fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=${base}`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }
        const rates = Object.keys(data.rates)
          .filter((acronym) => acronym !== base)
          .map((acronym) => ({
            acronym,
            rate: data.rates[acronym],
            name: currencies[acronym].name,
            symbol: currencies[acronym].symbol,
          }));
        this.setState({ rates });
      })
      .catch((error) => console.error(error.message));
  };

  render() {
    const { base, rates } = this.state;

    return (
      <React.Fragment>
        <CurrencyConverter />
        <form className="p-3 bg-white form-inline justify-content-center">
          <h3 className="mb-2 table-title">
            Base Currency: <b className="mr-3">1</b>
          </h3>
          <select
            value={base}
            onChange={this.changeBase}
            className="form-control form-control-md mb-2"
          >
            {Object.keys(currencies).map((currencyAcronym) => (
              <option key={currencyAcronym} value={currencyAcronym}>
                {currencyAcronym}
              </option>
            ))}
          </select>
        </form>
        <CurrencyTable base={base} rates={rates} />
      </React.Fragment>
    );
  }
}

export default Home;
