import React from 'react';
import './App.css';

import {
  useQuery,
  gql
} from "@apollo/client";

const GET_FILMS = gql`
  query Query {
    allFilms {
      films {
        id
        title
        releaseDate
      }
    }
  }
`;

function App() {

  const {loading, error, data} = useQuery(GET_FILMS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  const {films} = data?.allFilms

  return (
    <div>
      {films.map((film) => <h1>{film.title}</h1>)}
    </div>
  );
}

export default App;
