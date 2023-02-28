import React ,{FunctionComponent,useState} from 'react';
import Pokemon from './model/pokemon';
import POKEMONS from './model/mock-pokemon';



const App: FunctionComponent = () => {
 const [pokemons]  = useState<Pokemon[]>(POKEMONS)

 return (
  <div>
    <h1>Pokedex</h1>
    <p>Il y a {pokemons.length} pokemons</p>
  </div>
 )
}
  
export default App;