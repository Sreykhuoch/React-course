import React from "react";
import p1 from "../../assets/dream.jpg";

const User = ({img, name, age}) => {
  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  src={img}
                  alt=""
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </th>
              <td class="px-6 py-4">{name}</td>
              <td class="px-6 py-4">{age}</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  remove
                </a>
              </td>
            </tr>
          </tbody>
        </table>
       
      </div>
    </>
  );
};

export default User;
