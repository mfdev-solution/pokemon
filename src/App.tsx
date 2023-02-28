import React ,{FunctionComponent,useState,useEffect} from 'react';
import Pokemon from './model/pokemon';
import POKEMONS from './model/mock-pokemon';



const App: FunctionComponent = () => {
 const [pokemons,setPokemons]  = useState<Pokemon[]>([])

useEffect(()=>{
    setPokemons(POKEMONS)
},[]);
 return (
  <div>
    <h1>Pokedex</h1>
    <p>Il y a {pokemons.length} pokemons</p>
  </div>
 )
}
  
export default App;