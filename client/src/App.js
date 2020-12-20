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
import Orchestra from './Components/orchestra/orchestra'
import Photographe from './Components/photographe/photographe'
import Onemanshow from './Components/Onemanshow/onemanshow'
import Aboutus from './Components/aboutus/aboutus'
import EditProfile from './Components/EditProfile/EditProfile'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(current())
  })
  return (
    <div className="App">

<Navbar/>
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/Signup" component={Signup} />
        <Route exact path="/profile" component={Profil} />
        <Route path="/profile/editprofile/:id" component={EditProfile} />
        <Route path="/orchestra" component={Orchestra} />
        <Route path="/photographe" component={Photographe} />
        <Route path="/onemanshow" component={Onemanshow} />
        <Route path="/aboutus" component={Aboutus} />
        <Route path="/editprofile" component={EditProfile} />
        <PrivateRoute path="/dashbord" component={Dashbord} />

      </Switch>
    </div>
  )
}

export default App
