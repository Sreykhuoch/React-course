import React from "react";


const Profile = (props) => {

    const {imageSrc, title, description, children} = props;


  return (
    <>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-10 mt-10">
        <a href="#">
          <img
            class="rounded-t-lg"
            // src={props.imageSrc}     => instead of using like this we can : 
            src={imageSrc}
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {/* {props.title} */}
              {title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {/* {props.description} */}
            {description}
          </p>
        
        </div>
        {children}
      </div>
    </>
  );
};

export default Profile;
