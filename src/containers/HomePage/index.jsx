import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";
import Axios from "axios";
import { setUsers } from "./actions";
import { UsersList } from "./usersList";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

const actionDispatch = (dispatch) => ({
  setUser: (users) => dispatch(setUsers(users)),
});

export function HomePage(props) {
  const { users } = useSelector(stateSelector);
  const { setUser } = actionDispatch(useDispatch());

  const fetchUsers = async () => {
    const response = await Axios.get("https://reqres.in/api/users").catch(
      (err) => {
        console.log("Err: ", err);
      }
    );

    setUser(response.data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log("Users:", users);

  return (
    <div>
      <UsersList />
    </div>
  );
}
