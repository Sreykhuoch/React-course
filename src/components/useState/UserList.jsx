import React, { useState } from 'react'
import User from './User'
import people from '../../data'

const UserList = () => {

  const [user, setUser] = useState(people);
  function handleClear(){
    setUser([]);
  }
  return (
    <div>
      {user.map((p) => (
        // <User {...p} key={p.id}/>   this is 1st options

        <   User
             key={p.id}
             name={p.name}
             img={p.img}
             age={p.age}
        />
      ))}
      <button
          type="button"
          onClick={handleClear}
          class="focus:outline-none text-white bg-red-700 p-5 m-10 flex items-center rounded-lg justify-center">
          Clear All
        </button>
    </div>
  )
}

export default UserList
