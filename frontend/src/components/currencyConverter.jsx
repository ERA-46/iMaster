import React, { useEffect, useState } from "react";

const HomePage = () => {

  const [lkrRate, setLkrRate] = useState(null);
  const [cadRate, setCadRate] = useState(null);
  const [audRate, setAudRate] = useState(null);
  const [inrRate, setInrRate] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        const data = await response.json();
        const lkr = data.rates.LKR;
        const cad = data.rates.CAD;
        const aud = data.rates.AUD;
        const inr = data.rates.INR;

        setLkrRate(lkr);
        setCadRate(cad);
        setAudRate(aud);
        setInrRate(inr);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          <table className="table table-striped table-hover custom-table">
            <thead>
              <tr>
                <th scope="col">Currency</th>
                <th scope="col">Exchange Rate (1 USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>USD to LKR</td>
                <td>Rs {lkrRate ? lkrRate.toFixed(2) : "N/A"}</td>
              </tr>
              <tr>
                <td>USD to INR</td>
                <td>₹ {inrRate ? inrRate.toFixed(2) : "N/A"}</td>
              </tr>
              <tr>
                <td>USD to CAD</td>
                <td>C$ {cadRate ? cadRate.toFixed(2) : "N/A"}</td>
              </tr>
              <tr>
                <td>USD to AUD</td>
                <td>A$ {audRate ? audRate.toFixed(2) : "N/A"}</td>
              </tr>              
            </tbody>
          </table>
        </div>
      )}

      {lkrRate === null && cadRate === null && audRate === null && inrRate === null && !loading && (
        <p>Could not fetch exchange rates. Please try again later.</p>
      )}
    </div>
  );
};

export default HomePage;
