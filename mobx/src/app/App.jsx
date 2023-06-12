import React, { useEffect, useState } from "react";
import { Counter } from "../store/counter";
import { observer } from "mobx-react-lite";
import { Users } from "../store/users";

const users = new Users();

const App = observer(() => {
  useEffect(() => {
    users.fetchUsers();
  }, []);

  return (
    <div>
      {users.users.map(({ name }, id) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
});

export default App;
