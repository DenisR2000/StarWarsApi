import { useState, useEffect, Component} from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import '../styles/App.css';
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import Home from './Home'
import People from './People'
import Plenets from './Plenets'
import Films from './Films'
import Starships from './Starships'
import Vehicles from './Vehicles'
import NotFound from './NotFound';
import Header from './Header'
function App(){

    const [people, setPeople] = useState([])
    const [plenets, setPlanets] = useState([])
    const [films, setFilms] = useState([])
    const [starships, setStarships] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
      async function fetchPeople(){
        let result = await fetch('https://swapi.dev/api/people/?format=json')
        let data = await result.json()
        setPeople(data.results)
        setLoading(false)
      }

      async function fetchPlenets(){
        let result = await fetch('https://swapi.dev/api/planets/?format=json')
        let data = await result.json()
        setPlanets(data.results)
        setLoading(false)
      }

      async function fetchFilms(){
        let result = await fetch('https://swapi.dev/api/films/?format=json')
        let data = await result.json()
        setFilms(data.results)
        setLoading(false)
      }

      async function fetchStarships(){
        let result = await fetch('https://swapi.dev/api/starships/?format=json')
        let data = await result.json()
        setStarships(data.results)
        setLoading(false)
       
      }

      async function fetchVehicles(){
        let result = await fetch('https://swapi.dev/api/vehicles/?format=json')
        let data = await result.json()
        setVehicles(data.results)
        setLoading(false)
      }

      fetchPeople()
      fetchPlenets()
      fetchFilms()
      fetchStarships()
      fetchVehicles()
    }, [])
   
    return(
      <div className="app">
        <Header/>
        <Router>
          <Navbar />
          <div className="container-main">
            { loading ? (
              <div className="lds-hourglass"></div>
            ) : (
              <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/people">
                    <People data={ people } />
                  </Route>
                  <Route path="/plenets">
                    <Plenets data={ plenets } />
                  </Route>
                  <Route path="/films">
                    <Films data={ films }/>
                  </Route>
                  <Route path="/starships">
                    <Starships data={ starships }/>
                  </Route>
                  <Route path="/vehicles">
                    <Vehicles data={ vehicles }/>
                  </Route>
                  <Route component={ NotFound }></Route>
               </Switch>
            )}
          </div>
        </Router>
      </div>
    )
}

export default App;
