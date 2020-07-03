import React from 'react';

const CurrencyTable = (props) => {
  const { rates } = props;
  if (!rates) {
    return <h5>An error has occurred...</h5>;
  }
  return (
    <div className="container py-3 full-table-container">
      <div className="container py-3 table-container">
        <table className="table table-sm bg-white mt-4">
          <thead>
            <tr>
              <th scope="col" className="pr-4 py-2 table-title">
                Currency
              </th>
              <th scope="col" className="text-right pr-4 py-2 table-title">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {rates.map((currency) => (
              <tr key={currency.acronym}>
                <td className="pl-4 py-2">
                  {currency.name} <small>({currency.acronym})</small>
                </td>
                <td className="text-right pr-4 py-2">
                  {currency.rate.toFixed(3)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrencyTable;
