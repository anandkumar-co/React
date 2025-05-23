import { useEffect, useState } from "react";
import "./Hero.css";
import Item from "../Items/Item";
function Hero() {
  const[apiData, setApiData]=useState(null);
  const[loadingState,setLoadindState]=useState(true);
  const[errorstate,setErrorstate]=useState("");
  const Api="https://pokeapi.co/api/v2/pokemon?limit=100";
function fetchApi(Api){
 fetch(Api)
    .then((res)=>res.json())
    .then((data)=>{
      setApiData(data);
      setLoadindState(false);
    })
    .catch((err)=>{setErrorstate("Error fetching data");})
  }

  useEffect(()=>{
   fetchApi(Api)
  },[])
  
  if(loadingState){
    return(
      <div className="hero">
        <h1>POKEMON</h1>
        <div className="pokemon-box">
          <ul>
            <li>
              <Item/>
            </li>
          </ul>
        </div>
      </div>
    )
  }
  if(errorstate){
    return(
      <div className="hero">
        <h1>POKEMON</h1>
        <div className="pokemon-box">
          <ul>
            <li>
              <Item/>
            </li>
          </ul>
        </div>
      </div>
    )
  }
  return (  
    <div className="hero">
      <h1>POKEMON</h1>
      <div className="pokemon-box">
        <ul>
          {apiData.results.map((item,i)=>{
            return(
              <li key={i}>
                <Item name={item.name} url={item.url}/>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
    

}
export default Hero;