import { useState } from "react";


const State1 = () => {

    const [value, setValue] = useState("");

    function handleOnChange(e){
         setValue(e.target.value);
    }

  return (
    <div>
      <h2>{value}</h2>
      <input
        type="text"
        onChange={handleOnChange}
        value={value}
        id="default-search"
        class="mt-10 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Typing......."
        required
      />

      <button
        type="button"
        onClick={()=>setValue("")}
        class="mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Clear
      </button>
    </div>
  );
};

export default State1;
