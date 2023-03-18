import React, { useState } from 'react';

const ListRender = () => {
  const [list] = useState(['Matheus', 'Pedro', 'Josias', 'Maria']);
const [user, setuser] = useState([
	{ id: 1, name: "Thiago", age: 37},
	{id: 4324, name: "Amanda", age: 32},
	{id: 2312321, name: "Felipe", age: 31},
]);
  return (
    <div>
      <ul>
		{list.map((item,index) => (
			<li key={index}>{item}</li>
		))}
	  </ul>
	  <ul>{user.map((user) => (
		<li key={user.id}>
			{user.name} - {user.age}
		</li>
	  ))}</ul>
    </div>
  );
};

export default ListRender;
