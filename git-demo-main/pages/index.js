import Layout from "../components/Layout";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";


export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [item, setitem] = useState([]);
  const [hide, setHide] = useState(false);
  const [search, setSearch] = useState("");
  const [filterPokemon, setFilterPokemon] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchData();
    const data = localStorage.getItem("data");
    if (data) {
      setitem(JSON.parse(data));
    }
  }, []);


  const fetchData = async () => {
    const result = await axios("https://pokeapi.co/api/v2/pokemon?limit=120");
    setPokemon(result.data.results);
  };

  const deleteData = (id) => {
    setitem(item.filter(items=> items.id !== id))
    let data = JSON.parse(localStorage.getItem("data"));
    data = data.filter((items) => items.id !== id);
    localStorage.setItem("data", JSON.stringify(data));
    if (data.length === 0) {
      localStorage.removeItem("data");
    }
  };

  useEffect(() => {
    setFilterPokemon(
      pokemon.filter((pokemons) =>
        pokemons.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, pokemon]);

  return (
    <Layout title="NextJS Pokedex">
      <h1 className="text-4xl mb-8 text-center ">The Nextjs Pokedex</h1>
      <ul>
        <input
          type="text"
          placeholder="Search Pokemon"
          onChange={(e) => setSearch(e.target.value)}
        />
        {filterPokemon.map((pokeman, index) => (
          <li key={pokeman.name}>
            <Link href={`/pokemon?id=${index + 1}`}>
              <a className="border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md">
                <span className="mr-2 font-bold">{index + 1}.</span>
                {pokeman.name}
              </a>
            </Link>
          </li>
        ))}

        {item.map((loc, index) => {
          return (
            <li key={index}>
              <div className="border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md">
                <span className="mr-2 font-bold" onClick={() => setHide(false)}>
                  {index + 21}
                </span>
                <h1 onClick={() => setHide(true)}>{loc.name}</h1>
              </div>
              <button onClick={() => {router.push("localstorage/" + loc.id);}}>Edit</button>
              <button onClick={() => deleteData(loc.id)} className="ml-2 font-bold">Delete</button>
              {hide ? <h1 className="ml-4">Type : {loc.type}</h1> : null}
              {hide ? <h1 className="ml-4">Weight : {loc.weight}</h1> : null}
              {hide ? <h1 className="ml-4">Height : {loc.height}</h1> : null}
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

// export async function getStaticProps(context) {
//   try {
//       const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
//       const { results } = await res.json();
//       const pokemon = results.map((pokeman, index) => {
//           const paddedId = ('00' + (index + 1)).slice(-3);
//           const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
//           return { ...pokeman, image };
//       });
//       return {
//           props: { pokemon },
//       };
//   } catch (err) {
//       console.error(err);
//   }
// }
