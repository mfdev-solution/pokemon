import React ,{FunctionComponent} from 'react';
import PokemonList from './pages/pokemon-list';
import { Link, Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';


const App: FunctionComponent = () => {

 return (
  <Router>
    <div>
        <nav>
            <div className="na-wrapper teal">
                <Link to="/" className="brand-logo center"> Pokedex</Link>

            </div>
        </nav>
        <Switch>
            <Route exact path="/" component={PokemonList}/>
            <Route exact path= "/pokemons" component={PokemonList}/>
            <Route path="/pokemons/:id" component={PokemonsDetail}/>
        </Switch>
    </div>
    </Router>
 )
}
  
export default App;