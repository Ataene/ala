import React from "react";
const aws = require("../images/aws.png");
const express = require("../images/expressJs.png");
const reactNative = require("../images/reactNative.png");
const react = require("../images/react.png");
const ml = require("../images/ml.png");
const mongoDB = require("../images/mongoDb.png");
const firebase = require("../images/firebase.png");

const Technology = () => {
  return (
    <>
      <div
        class="text-gray-600 body-font"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-once="true"
      >
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-wrap">
              <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                  Technologies
                </h1>
              </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-red-300 shadow-lg shadow-sky-500/60">
                <img
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-once="true"
                  alt="team"
                  class="w-34 h-40 -mt-24 bg-gray-100 rounded mr-4 hover:scale-125"
                  src={react}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Quality Content Delivery
                  </h2>
                  <p class="text-gray-500">
                    Deliverying original content for our prestigues audience
                  </p>
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
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-red-300 shadow-lg shadow-sky-500/60">
                <img
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-once="true"
                  alt="team"
                  class="w-34 h-40 -mt-24 bg-gray-100 rounded mr-4 hover:scale-125"
                  src={mongoDB}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Quality Content Delivery
                  </h2>
                  <p class="text-gray-500">
                    Deliverying original content for our prestigues audience
                  </p>
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
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-red-300 shadow-lg shadow-sky-500/60">
                <img
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-once="true"
                  alt="team"
                  class="w-34 h-40 -mt-24 bg-gray-100 rounded mr-4 hover:scale-125"
                  src={ml}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Quality Content Delivery
                  </h2>
                  <p class="text-gray-500">
                    Deliverying original content for our prestigues audience
                  </p>
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
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-red-300 shadow-lg shadow-sky-500/60">
                <img
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-once="true"
                  alt="team"
                  class="w-34 h-40 -mt-24 bg-gray-100 rounded mr-4 hover:scale-125"
                  src={firebase}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Quality Content Delivery
                  </h2>
                  <p class="text-gray-500">
                    Deliverying original content for our prestigues audience
                  </p>
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
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-yellow-300 shadow-lg shadow-sky-500/60">
                <img
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-once="true"
                  alt="team"
                  class="w-34 h-40 -mt-24 bg-gray-100 rounded mr-4 hover:scale-125"
                  src={reactNative}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Unique Content
                  </h2>
                  <p class="text-gray-500">
                    Providing exclusive content within a pricely context
                  </p>
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
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-green-300 shadow-lg shadow-sky-500/60">
                <img
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-once="true"
                  alt="team"
                  class="w-34 h-40 -mt-24 bg-gray-100 rounded mr-4 hover:scale-125"
                  src={aws}
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Exclusive Listen
                  </h2>
                  <p class="text-gray-500">
                    Interactive section for on-demand listen on the go, fun and
                    exciting.
                  </p>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
