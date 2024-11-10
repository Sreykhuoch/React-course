import React, { useState } from 'react'

const Popup = () => {

    const [alert, setAlert] = useState(false);
    function handleAlert(){
        setAlert(!alert);
    }
  return (
    <div className='m-20'>
      {alert ? <Message/> : null}
      <button className='p-4 rounded-xl bg-purple-800 w-20 h-15'
              onClick={handleAlert}
      
      >

        Toggle</button>
    </div>
  )
}


function Message(){
    return <h2 className='p-4 rounded-xl bg-red-200 w-50 h-20  mb-10' >Message ........ </h2>
}

export default Popup
