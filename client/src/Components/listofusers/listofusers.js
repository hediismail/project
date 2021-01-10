import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteuserbyid, getusers} from '../../JS/actions/user';
import './listofusers.css';

const Listofusers = () => {
  useEffect(() => {
    dispatch(getusers());
  }, []);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const loadUsers = useSelector((state) => state.userReducer.loadUsers);

  //   const users = useSelector((state) => state.userReducer.users);
  console.log(users);
  var x = 1;
  return (
    <div>
      <table id="customers">
        <tr>
          <th className="w3-center">N°</th>
          <th className="w3-center">Name</th>
          <th className="w3-center">LastName</th>
          <th className="w3-center">Role</th>
          <th className="w3-center">email</th>
          <th className="w3-center"> </th>
        </tr>
        {loadUsers
          ? 'loading'
          : users.map((el, key) => (
              <tr>
                <td>{key + 1}</td>
                <td>{el.name}</td>
                <td>{el.lastName}</td>
                <td>{el.role}</td>
                <td>{el.email}</td>
                <td>
                  <button onClick={() => dispatch(deleteuserbyid(el._id))}>
                    <i class="fa fa-close"></i>
                  </button>
                </td>
              </tr>
            ))}
      </table>
    </div>
  );
};

export default Listofusers;
