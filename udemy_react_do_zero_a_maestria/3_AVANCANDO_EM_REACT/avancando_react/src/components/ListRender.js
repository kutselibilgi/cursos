import React, { useState } from 'react';

const ListRender = () => {
  const [list] = useState(['Matheus', 'Pedro', 'Josias', 'Maria']);
  const [user, setUser] = useState([
    { id: 1, name: 'Thiago', age: 37 },
    { id: 2, name: 'Amanda', age: 32 },
    { id: 3, name: 'Felipe', age: 31 }
  ]);

  const deleteRandomUser = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUser((prevUser) => {
      console.log(prevUser);
      return prevUser.filter((user) => randomNumber !== user.id);
    });
  };
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandomUser}>Delete Random User</button>
    </div>
  );
};

export default ListRender;
