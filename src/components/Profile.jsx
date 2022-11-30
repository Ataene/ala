import React from "react";
const emmanuel = require("../images/Alaf.jpeg");

const Profile = () => {
  return (
    <>
      <div className="dark:bg-gray-600 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-6 lg:py-10 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-10 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left" data-aos="fade-right"
                  data-aos-delay="600"
                  data-aos-once="true">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Emmanuel
              <span className="text-red-400"> Ala</span>
            </h1>
            <p className="mt-1 mb-1 text-3xl sm:mb-12">
              <span className="text-green-600 italic">Full Stack Software</span>{" "}
              Developer, <br />
              B.A.Sc., Petroluem Engineering & MBA
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/alafonye-emmanuel/",
                    "_blank"
                  )
                }
                title="LinkedIn Profile"
                className="flex items-center justify-center w-10 h-10 rounded dark:bg-teal-400 dark:text-gray-900 cursor-pointer"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                onClick={() =>
                  window.open("https://github.com/Ataene", "_blank")
                }
                title="GitHub Profile"
                className="flex items-center justify-center w-10 h-10 rounded dark:bg-teal-400 dark:text-gray-900 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-10 h-10"
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-24 mt-4 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-once="true">
            <img
              src={emmanuel}
              alt="Emmanuel Alafonye"
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
