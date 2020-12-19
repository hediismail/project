import { useEffect } from 'react'

import Signup from './Components/Signup/Signup'
import { Switch, Route } from 'react-router-dom'
import Dashbord from './Components/Dashbord/Dashbord'
import PrivateRoute from './Components/router/PrivateRoute'
import { useDispatch } from 'react-redux'
import { current } from './JS/actions/user'

import './App.css'
import EditProfile from './Components/EditProfile/EditProfile'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(current())
  })
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/profile/editprofile" component={EditProfile} />
        <PrivateRoute path="/dashbord" component={Dashbord} />
      </Switch>
    </div>
  )
}

export default App
