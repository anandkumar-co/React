import {useEffect, useState } from "react";
import Item from "../Items/Item";
import "./SearchBar.css";
function SearchBar() {
    const API="https://pokeapi.co/api/v2/pokemon?limit=100";
    const [pokemon, setPokemon]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");
    const [searchValue, setSearchValue]=useState("");
    const fetchPokemon = async () => {
        try{
        const res= await fetch(API);
        const data= await res.json();
       
        const pokemonList=data.results.map((pokemon)=>{
            return {
                name:pokemon.name,
                url:pokemon.url
            }})
        setPokemon(pokemonList);
        setLoading (false);
        setError(false);
        }catch(err){
            console.log(err);
        }
    }
     useEffect(()=>{
        fetchPokemon(API);
    },[])
  
        const filteredPokemon=pokemon.filter((currPokemon)=> currPokemon.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        console.log(filteredPokemon);
   
        if(loading){
            return(
                <div className="search-bar">
                    <h1>Loading...</h1>
                </div>
            )
        }
        if(error){
            return(
                <div className="search-bar">
                    <h1>{error}</h1>
                </div>
            )
        }
        
        
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." value={searchValue} onChange={(e)=>{
        setSearchValue(e.target.value);
      }}/>
        
      <div className="pokemon-card">
        <ul>
          {filteredPokemon.map((currpokemon)=>(
            <li key={currpokemon.name}>
              <Item name={currpokemon.name} url={currpokemon.url}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default SearchBar;