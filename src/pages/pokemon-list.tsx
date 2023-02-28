import React, { FunctionComponent } from 'react';
import PokemonCard from '../components/pokemon-card';
import usePockemons from '../hooks/pokemon.hook';
  
const PokemonList: FunctionComponent = () => {
  // const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  // useEffect(() => {
  //   setPokemons(POKEMONS);
  // }, []);
  const pokemons = usePockemons()
  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container"> 
        <div className="row"> 
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
        </div>
      </div>
    </div> 
  );
}
  
export default PokemonList;