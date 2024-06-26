import { useState, useEffect } from "react";

const useCountry = (name) => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );

        const result = await response.json();

        setLoading(false);
        setCountry(result);
      } catch (error) {
        setError("The country is not found!!!");
      }
    };
    fetchCountryInfo();
  }, [name]);

  return { loading, country, error };
};

export default useCountry;
