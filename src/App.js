import { HashRouter, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './Pages/Movies';
import Homepage from './Pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './Components/Navbar-main';
import SearchPage from './Pages/SearchPage';
import AdvancedSearch from './Pages/AdvancedSearch';

function App() {

  return (
    <div>
      
      <HashRouter>
      <MainNavbar/>
        
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route exact path="/movies/new">
          <Movies 
          showPaginator={true}
          showSort={false}
          galleryTitle='New movies'
          sortByDefault='release_date.desc'/>
        </Route>
        <Route exact path="/movies/best">
          <Movies 
          showPaginator={true}
          showSort={false}
          galleryTitle='Best movies'
          sortByDefault='vote_average.desc'/>
        </Route>
        <Route exact path="/advanced-search">
          <AdvancedSearch/>
        </Route>
        <Route exact path="/search-page/:text">
        <SearchPage></SearchPage>
        </Route>

      </HashRouter>
    </div>
  );
}

export default App;
