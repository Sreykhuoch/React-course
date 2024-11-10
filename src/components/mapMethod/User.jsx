const name = ["Heng menghuy", "sok pisey", "chea piseth",  "sean veasna"]


// we use  map() method to loop over array 
const User = () => {
  return (
    <div className="m-20 ">
      {name.map((n)=> (
        <h1>{n}</h1>
      ))}
    </div>
  )
}

export default User
