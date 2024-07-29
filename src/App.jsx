import { useState } from 'react'
import { Details } from './components/details'
import { List } from './components/list'
import './App.css'


function App() {

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="container">
      <List onSelectUser={setSelectedUser} />
      {selectedUser && <Details info={selectedUser} />}
    </div>
  );
}

export default App