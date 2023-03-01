import Pokemon from "../models/pokemon";
 
export default class PokemonService {
 
  static getPokemons(): Promise<Pokemon[]> {
    return fetch('http://localhost:3001/pokemons')
      .then(response => response.json())
      .catch(err => this.handleError(err))
  }
 
  static getPokemon(id: number): Promise<Pokemon|null> {
    return fetch(`http://localhost:3001/pokemons/${id}`)
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data)
      .catch(err => this.handleError(err));
  }

  static updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
    return fetch(`http://localhost:3001/pokemons/${pokemon.id}`,{
      method: 'PUT',
      body: JSON.stringify(pokemon),
      headers: { 'Content-Type':'Application/json' }
    })
    .then(response => response.json())
    .catch(err => this.handleError(err));
  }
 
  static deletePokemon(pokemon:Pokemon):Promise<{}>{

      return fetch(`http://localhost:3001/pokemons/${pokemon.id}`,{
        method: 'DELETE',
        headers: { 'Content-Type':'application/json'}
      })
      .then(response => response.json())
      .catch(err => this.handleError(err));
    
  }
  static addPokemon (pokemon:Pokemon):Promise<Pokemon> {
    delete pokemon.created
    return fetch(`http://localhost:3001/pokemons`,{
        method: 'POST',
        body: JSON.stringify(pokemon),
        headers: { 'Content-Type':'application/json'}
      })
      .then(response => response.json())
      .catch(err => this.handleError(err));
    
  }

  static searchPokemon(term:string):Promise<Pokemon[]>{
    return fetch(`http://localhost:3001/pokemons?q=${term}`)
    .then(response => response.json())
    .catch(err => this.handleError(err))
  }

  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }
  static handleError(err: Error): void {
    console.log(err);
    
  }
}