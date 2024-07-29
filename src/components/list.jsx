import { useState, useEffect } from "react";
import '../App.css'

export function List({ onSelectUser }) {
    const [users, setUsers] = useState([]);
    const [active, setActive] = useState('');


  
    useEffect(() => {
      fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
        .then(response => response.json())
        .then(data => setUsers(data));
    }, []);
  
    return (
      <div className="list-container">
      <ul className="list">
        {users.map((user, i) => (
          <li className={active === user ? "active" : ''} key={user.id} onClick={() => {onSelectUser(user), setActive(user)}}>
            {user.name}
          </li>
        ))}
      </ul>
      </div>
    );
  }