import { useEffect, useState } from 'react'

import UserBox from './components/UsersBox'
import CreateUser from './components/CreateUser'
import VoiceflowWidget from './components/chatbot';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://backend-fullsstack.onrender.com/api/users/') 
      .then(res => res.json())
      .then(res => setUsers(res))
  }, [])
  return (
    <main>

      <h1>Frontend and Backend APP</h1>
      <VoiceflowWidget />
      {/* <CreateUser />

      { 
        users.map(user => (
          <UserBox name={user.name} password={user.password} id={user.id} key={user.id} />
        ))
      } */}

      

    </main>
  );
}

export default App;
