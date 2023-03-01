import React ,{FunctionComponent} from 'react';
import PokemonList from './pages/pokemon-list';
import { Link, Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './components/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
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
            <Route exact path= "/pokemons/add" component={PokemonAdd}/>
            <Route exact path="/pokemons/edit/:id" component={PokemonEdit}/>
            <Route path="/pokemons/:id" component={PokemonsDetail}/>
            <Route component={PageNotFound} />
        </Switch>
    </div>
    </Router>
 )
}
  
export default App;