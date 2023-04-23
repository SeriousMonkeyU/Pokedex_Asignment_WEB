import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import '../css/Poke-style.css'

const PokemonZoo = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [disable, setDisable] = useState(true);

  const pokeFunc = async () => {
    const res = await fetch(url);
    const data = await res.json();
    const limit = 20;

    setNextUrl(data.next);
    setPrevUrl(data.previous);
    getPokemonData(data.results, limit);
    setLoading(false);

    console.log("PREV", data.previous);
    console.log("NEXT", data.next);

    if (data.previous != null) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const getPokemonData = async (results, limit) => {
    const pokemonList = await Promise.all(
      results.slice(0, limit).map(async (item) => {
        const res = await fetch(item.url);
        const data = await res.json();
        return data;
      })
    );
  
    setPokeData((prevState) => {
      const newState = [...prevState, ...pokemonList];
      newState.sort((a, b) => (a.id > b.id ? 1 : -1));
      const filteredState = newState.filter(
        (pokemon, index, self) => index === self.findIndex((p) => p.id === pokemon.id)
      );
      return filteredState;
    });
  };
  
  

  useEffect(() => {
    pokeFunc();
  }, [url]);

  return (
    <>
      <div>
        <Pokemon pokemon={pokeData} loading={loading}></Pokemon>
        <div className="btn-div">
          <button
            type="button"
            disabled={disable}
            className="btn btn-func space"
            onClick={() => {
              setPokeData([]);
              setUrl(prevUrl);
            }}
          >
            Previous
          </button>

          <button
            type="button"
            className="btn btn-func"
            onClick={() => {
              setPokeData([]);
              setUrl(nextUrl);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default PokemonZoo;
