 import { useEffect, useState } from "react";
import "./Item.css";
 function Item(props){
    const {name,url}=props;
    const [pokemon, setPokemon] = useState(null);
    const [loading,setLoading]=useState(true);
    const[error,setError]=useState("");
    const fetchApi = (url) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data);
                setLoading(false);
            })
            .catch((err) => {                
                setError("Error fetching data");
                setLoading(false);
            });
    };
    useEffect(() => {
        fetchApi(url);
    }, []);

    
    if(loading){
        return(
            <div className="item">
                <figure>
                    <img src="https://cdn.dribbble.com/users/1162073/screenshots/3848914/media/0f1a2b5c7d8e6f9b0c3a4d2e5f1a2b5c.gif" alt="" />
                </figure>
                <h1>Loading...</h1>
            </div>
        )
    }
    if(error){
        return(
            <div className="item">
                <figure>
                    <img src="https://gifdb.com/images/high/pokemon-caterpie-your-a-bug-z3pgnijce9rtxa7j.webp" alt="" />
                </figure>   
                <h1>{error}</h1>
            </div>
        )
    }

return(
    
    <div className="item">
                <figure>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
                </figure>
                <h1 className="uppercase">{name}</h1>
                <hr/>
                <div className="pokemon-detail">

                    <h2>Height: {pokemon.height}</h2>
                    <h2>Weight: {pokemon.weight}</h2>
                    <h2>Base : {pokemon.base_experience}</h2>
                   
                    <h2>Abilities:{pokemon.abilities.map((ability)=>ability.ability.name).join(", ")}</h2>
                    
                </div>
            
    </div>
)
 }
 export default Item;