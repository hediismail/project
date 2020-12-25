import { useEffect } from 'react'
import home from './pages/home'

import Signup from './Components/Signup/Signup'
import { Switch, Route } from 'react-router-dom'
import Dashbord from './Components/Dashbord/Dashbord'
import PrivateRoute from './Components/router/PrivateRoute'
import { useDispatch } from 'react-redux'
import { current } from './JS/actions/user'

import './App.css'

import Profil from './pages/profil'
import Navbar from './Components/navbar/navbar'
import Photographe from './Components/photographe/photographe'
import Onemanshow from './Components/clown/clown'
import Aboutus from './Components/aboutus/aboutus'
import addprofile from './Components/addprofile/addprofile'
import myprofile from './Components/myprofile/myprofile'
import Music from './Components/music/music'
import Clown from './Components/clown/clown'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(current())
  })
  return (
    <div className="App">

      <Navbar />

      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/Signup" component={Signup} />
        <Route exact path="/profile/:id" component={Profil} />
        {/* <Route path="/profile/addprofile/:id" component={addprofile} /> */}
        <Route path="/music" component={Music} />
        <Route path="/photographe" component={Photographe} />
        <Route path="/clown" component={Clown} />
        <Route path="/aboutus" component={Aboutus} />
        <Route path="/addprofile" component={addprofile} />
        <Route path="/myprofile" component={myprofile} />

        {/* <PrivateRoute path="/addprofile" component={addprofile} /> */}

      </Switch>
    </div>
  )
}

export default App
