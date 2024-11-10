import Profile2 from "./Profile2"
import React from "react"

const userData = [
    {  id: 1, name : "Heng", position: "manager" },
    {  id: 2, name : "Sothea", position: "IT" },
    {  id: 3, name : "Lina", position: "Acc" }
]

console.log(userData)

const Users2 = () => {
  return (
    <div>
      {userData.map((user)=>{
        return <Profile2 {...user} key={user.id}/>;
      })}
    </div>
  )
}

export default Users2
