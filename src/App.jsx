import Gretting from "./components/funtions/Gretting";
import GroupPoster from "./components/propss/GroupPoster";
import Message from "./components/funtions/Message";
import Product from "./components/mapMethod/Product";
import User from "./components/mapMethod/User";
import Profile2 from "./components/props&mapMethod/Profile2";
import { useState } from "react";
import State1 from "./components/reactHook&state/State1";
import UserList from "./components/useState/UserList";
import Popup from "./components/toggle/popup";




const obj = {name:"heng", age: 24}

const App = () => {

  //React state with object : 

  const [user, setUser] = useState(obj);
  function handleChange(){
      setUser({name:"khuoch", age: 35})
  }




  // const onChangeHandler = () => {
  //   console.log("typing");
  // }

  // const onClickHandler =() =>
  // {
  //   console.log("you clicked me")
  // }

  // function submiteHandler (e) {
  //   e.preventDefault();
  //   console.log(e)

  // }

       //React hhook and state
      //  const arr = React.useState(0);
      //  const count = arr[0];
      //  const setCount = arr[1];
      //  function handleIncrement (){
      //   setCount(count +1 )
      //  }



      //array distructuring : 

      // const [count, setCount] = useState(0);
      // function handleIncrement (){
      //     setCount(count +1 )
      //    }



  return (

    <>
      {/* <Gretting/>
       <Message/>
       <GroupPoster/>
       <User/>
      <div className="mt-20 ml-20 mb-20">
        <Product/>
      </div> */}
      {/* from level2 folder in mapMethod() */}
      {/* <Profile2/> */}

      {/* form with events */}

      {/* <div>
     <form onSubmit={submiteHandler}>
        <input onChange={onChangeHandler} type="text"></input>
      </form>
      <button onClick={onClickHandler} type="submit">click me</button>
     </div> */}

    

      {/* react state */}
      {/* <div className="flex flex-col w-[200px] items-center justify-center mt-20">
        <h3 className="text-2xl text-blue-700 ">{count}</h3>
        <button
          type="button"
          onClick={handleIncrement}
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Increment
        </button>
      </div> */}



      {/* react state with object  */}
      <article>
        <h2>{user.name}</h2>
        <h2>{user.age}</h2>
        <button
          type="button"
          onClick={handleChange}
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Change User
        </button>
      </article>

      <State1/>



      <UserList/>

      <Popup/>
      
    </>
  );
}

export default App;
