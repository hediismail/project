import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Dimmer, Loader } from 'semantic-ui-react'
import './profileslist.css'
import { getprofiles } from '../../JS/actions/profile'
import Profile from '../profile/profile'
import { Spinner } from 'react-bootstrap'
const Profileslist = (région) => {
  console.log(région.région)
  const dispatch = useDispatch()
  const profiles = useSelector((state) => state.profileReducer.profiles)
  const loadprofiles = useSelector((state) => state.profileReducer.loadprofiles)
  console.log(loadprofiles, profiles)

  useEffect(() => {
    dispatch(getprofiles())
  }, [])
  if (région.région === '') {
    return (
      <div className="profilelist">
        {loadprofiles ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          profiles.map((el) => <Profile key={el._id} profile={el} />)
        )}
      </div>
    )
  } else {
    return (
      <div className="profilelist">
        {profiles
          .filter((el) => el.région === région.région)

          .map((el) => (
            <Profile key={el._id} profile={el} />
          ))}
      </div>
    )
  }
}

//      {/* {profiles
// .filter((el) => el.région === {région})

// .map((el) => (
//   <Profile key={el._id} profile={el} />
// ))} */}

export default Profileslist
