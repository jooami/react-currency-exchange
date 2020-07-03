import React from 'react';
import currencies from '../utils/currencies';
import { checkStatus, json } from '../utils/fetchUtils';
import SyncAltIcon from '@material-ui/icons/SyncAlt';

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 0.8861,
      baseAcronym: 'USD',
      baseValue: 1,
      quoteAcronym: 'EUR',
      quoteValue: 1 * 0.8861,
      loading: false,
    };
  }

  componentDidMount() {
    const { baseAcronym, quoteAcronym } = this.state;
    this.getRate(baseAcronym, quoteAcronym);
  }
  getRate = (base, quote) => {
    this.setState({ loading: true });
    fetch(
      `https://alt-exchange-rate.herokuapp.com/latest?base=${base}&symbols=${quote}`
    )
      .then(checkStatus)
      .then(json)
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }
        const rate = data.rates[quote];
        this.setState({
          rate,
          baseValue: 1,
          quoteValue: Number((1 * rate).toFixed(3)),
          loading: false,
        });
      })
      .catch((error) => console.error(error.message));
  };

  toBase(amount, rate) {
    return amount * (1 / rate);
  }

  toQuote(amount, rate) {
    return amount * rate;
  }

  convert(amount, rate, equation) {
    const input = parseFloat(amount);
    if (Number.isNaN(input)) {
      return '';
    }
    return equation(input, rate).toFixed(3);
  }

  changeBaseAcronym = (event) => {
    const baseAcronym = event.target.value;
    this.setState({ baseAcronym });
    this.getRate(baseAcronym, this.state.quoteAcronym);
  };

  changeBaseValue = (event) => {
    const quoteValue = this.convert(
      event.target.value,
      this.state.rate,
      this.toQuote
    );
    this.setState({
      baseValue: event.target.value,
      quoteValue,
    });
  };

  changeQuoteAcronym = (event) => {
    const quoteAcronym = event.target.value;
    this.setState({ quoteAcronym });
    this.getRate(this.state.baseAcronym, quoteAcronym);
  };

  changeQuoteValue = (event) => {
    const baseValue = this.convert(
      event.target.value,
      this.state.rate,
      this.toBase
    );
    this.setState({
      quoteValue: event.target.value,
      baseValue,
    });
  };

  render() {
    const {
      baseAcronym,
      baseValue,
      quoteAcronym,
      quoteValue,
      loading,
    } = this.state;

    const currencyOptions = Object.keys(currencies).map((currencyAcronym) => (
      <option key={currencyAcronym} value={currencyAcronym}>
        {currencyAcronym}
      </option>
    ));

    return (
      <React.Fragment>
        <div className="container py-5" id="currency-converter">
          <h3 className="section-title pb-2">Converter</h3>
          <form className="form-row py-5">
            <div className="form-group col-md-5 mb-0 pl-3">
              <select
                value={baseAcronym}
                onChange={this.changeBaseAcronym}
                className="form-control form-control-md mb-2"
                disabled={loading}
              >
                {currencyOptions}
              </select>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    {currencies[baseAcronym].symbol}
                  </div>
                </div>
                <input
                  id="base"
                  className="form-control form-control-md"
                  value={baseValue}
                  onChange={this.changeBaseValue}
                  type="number"
                />
              </div>
              <small className="country-text">
                {currencies[baseAcronym].name}
              </small>
            </div>
            <div className="col-md-2 py-3 d-flex justify-content-center align-items-center">
              <h3 className="convert-icon">
                <SyncAltIcon />
              </h3>
            </div>
            <div className="form-group col-md-5 mb-0 pr-3">
              <select
                value={quoteAcronym}
                onChange={this.changeQuoteAcronym}
                className="form-control form-control-md mb-2"
                disabled={loading}
              >
                {currencyOptions}
              </select>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    {currencies[quoteAcronym].symbol}
                  </div>
                </div>
                <input
                  id="quote"
                  className="form-control form-control-md"
                  value={quoteValue}
                  onChange={this.changeQuoteValue}
                  type="number"
                />
              </div>
              <small className="country-text">
                {currencies[quoteAcronym].name}
              </small>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default CurrencyConverter;
