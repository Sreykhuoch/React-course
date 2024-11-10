import React from 'react'

const Profile2 = (props) => {

    const  {name, position} = props;
  return (
    <div>
      <h2>{name}</h2>
      <h2>{position}</h2>
     
    </div>
  )
}

export default Profile2;
