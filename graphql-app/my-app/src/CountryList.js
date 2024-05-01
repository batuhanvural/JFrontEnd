import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      capital
      population
    }
  }
`;

const CountryList = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.countries || !Array.isArray(data.countries)) {
    return <p>No country data available.</p>;
  }

  return (
    <div>
      <h2>Country List</h2>
      <ul>
        {data.countries.map((country, index) => (
          <li key={index}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
