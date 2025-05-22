import { useEffect, useState } from "react";
import "./hero.css";
import Item from "../Items/Item";
function Hero() {
  const[apiData, setApiData]=useState(null);
  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
    .then((res)=>res.json())
    .then((data)=>{
      setApiData(data);
      console.log(data);
    })
    .catch((err)=>{console.log(err)})
  },[])
  console.log({apiData});
  if(apiData){
  return (
    
    <div className="hero">
      <Item apiData={apiData}/>
    </div>
  );
    }

}
export default Hero;