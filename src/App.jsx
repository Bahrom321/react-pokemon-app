import React, {useState} from 'react'
import axios from "axios"
import './index.css';

const App = () => {
  const [pokName, setPokName] = useState("")
  const [pokemon, setPokemon] = useState({
          name:"",
          species:"",
          img:"",
          attack:"",
          defense:"",
  })
  const fetchPokemon = () => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokName}`)
      .then((response)=> {
        console.log(response);
        setPokemon({
          name:pokName,
          species:response.data.species.name,
          img:response.data.sprites.front_default,
          attack:response.data.stats[1].base_stat,
          defense:response.data.stats[2].base_stat,
        })
      }) 
      .catch(()=>{
        console.error("Error!");
      })    }

  return (
    <>
    <h1 className="themeText">Pokemon App</h1>
      <div className="searchArea">
        <input 
        type="text"
        className="search"
        onChange={(e) => {
          setPokName(e.target.value)
        }}
        />
        <button onClick={fetchPokemon}>search</button>
      </div>
      <div className="resultCard">
        <div className="card">
          <h1>{pokemon.name}</h1>
          <img src={pokemon.img} alt="" />
          <h3>Species: {pokemon.species}</h3>
          <h3>Attack: {pokemon.attack}</h3>
          <h3>Defense{pokemon.defense}</h3>
        </div>
      </div>
    </>
  )
}

export default App

