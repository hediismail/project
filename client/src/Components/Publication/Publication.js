import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addPublication,
  getPublicationById,
} from '../../JS/actions/Publication'

import './Publication.css'
const Publication = ({ idprofile }) => {
  const [publication, setPublication] = useState('')
  const [file, setFile] = useState('')
  const data = new FormData()
  data.append('publication', publication)
  data.append('file', file)
  console.log(file)
  const dispatch = useDispatch()
  const publicationsAdded = useSelector(
    (state) => state.publicationReducer.publication.publication,
  )
  useEffect(() => {
    dispatch(getPublicationById(idprofile))
  }, [publicationsAdded])

  return (
    <div className=" w3-container w3-card w3-white w3-round w3-margin">
      <div className="text">
        <input
          type="text"
          name="publication"
          value={publication}
          placeholder="write your status"
          onChange={(e) => {
            setPublication(e.target.value)
          }}
        />
      </div>
      <input
        type="file"
        id="myFile"
        onChange={(e) => {
          setFile(e.target.files[0])
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault()
          dispatch(addPublication(data, idprofile))
          setPublication('')
          setFile('')
        }}
      >
        add
      </button>
    </div>
  )
}

export default Publication
