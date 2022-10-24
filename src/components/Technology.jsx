import React from "react";

const Technology = () => {
  const techStacks = [
    {
      id: 1,
      image: require("../images/react.png"),
      title: "Reactjs",
      description: "Frontend development framework",
    },
    {
      id: 2,
      image: require("../images/expressJs.png"),
      title: "Expressjs",
      description: "Expressjs for backend development",
    },
    {
      id: 3,
      image: require("../images/mongoDb.png"),
      title: "Database management",
      description: "Database development and management",
    },
    {
      id: 4,
      image: require("../images/reactNative.png"),
      title: "React Native",
      description: "React Native",
    },
    {
      id: 5,
      image: require("../images/firebase.png"),
      title: "React Native",
      description: "React Native",
    },
    {
      id: 6,
      image: require("../images/expressJs.png"),
      title: "React Native",
      description: "React Native",
    },
    {
      id: 7,
      image: require("../images/expressJs.png"),
      title: "React Native",
      description: "React Native",
    },
    {
      id: 8,
      image: require("../images/expressJs.png"),
      title: "React Native",
      description: "React Native",
    },
    {
      id: 10,
      image: require("../images/ml.png"),
      title: "React Native",
      description: "React Native",
    },
    {
        id: 11,
        image: require("../images/ml.png"),
        title: "Python",
        description: "Data science",
      },
      {
        id: 12,
        image: require("../images/ml.png"),
        title: "SwiftUI",
        description: "iOS development",
      },
      {
        id: 12,
        image: require("../images/ml.png"),
        title: "SwiftUI",
        description: "iOS development",
      },
  ];
  return (
    <>
      <div
        class="text-gray-600 body-font"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-once="true"
      >
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-wrap">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Technologies
              </h1>
            </div>
            {techStacks.map((item) => (
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full" key={item.id}>
                <div class="h-full flex items-center border-gray-200 border p-2 rounded-lg bg-green-300 shadow-lg shadow-sky-500/60">
                  <img
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-once="true"
                    alt="team"
                    class="w-24 h-24 -mt-20 bg-gray-100 rounded mr-4 hover:scale-125"
                    src={item.image}
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">
                      {item.title}
                    </h2>
                    <p class="text-gray-500">{item.description}</p>
                    <button class="flex mt-3 p-2 h-full items-center mb-2 bg-green-600  focus:outline-none hover:bg-green-600 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                      <span class="title-font font-lg text-white">
                        Listen Now
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
