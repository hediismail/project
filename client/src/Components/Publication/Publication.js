import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPublication,
  getPublicationById,
} from "../../JS/actions/Publication";

import "./Publication.css";
const Publication = ({ idprofile }) => {
  const [publication, setPublication] = useState("");
  const [file, setFile] = useState("");
  const data = new FormData();
  data.append("publication", publication);
  data.append("file", file);
  console.log(file);
  const dispatch = useDispatch();
  //   const publications = useSelector(
  //     (state) => state.publicationReducer.publications
  //   );
  useEffect(() => {
    dispatch(getPublicationById(idprofile));
  }, []);

  return (
    <div>
      <div className="text">
        <input
          type="text"
          name="publication"
          value={publication}
          placeholder="write your status"
          onChange={(e) => {
            setPublication(e.target.value);
          }}
        />
      </div>
      <input
        type="file"
        id="myFile"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(addPublication(data, idprofile));
          setPublication("");
        }}
      >
        add
      </button>
    </div>
  );
};

export default Publication;
