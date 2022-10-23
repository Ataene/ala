import React from "react";

const Steps = () => {
  return (
    <>
      <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-teal-400">
                <h3 className="text-3xl font-semibold">TIME LINE</h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                  Career at a glance
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-teal-400">
                  <h3 className="text-xl font-semibold tracking-wide text-green-500">
                    Master of Business Administration(MBA){" "}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    Nov 2022
                  </time>
                  <p className="mt-3">
                    Entreprenuership, Management, Finance, Marketing & Data Science
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-teal-400">
                  <h3 className="text-xl font-semibold tracking-wide text-green-600">
                    Software Engineer{" "}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    Jan 2021
                  </time>
                  <p className="mt-3">
                    Full stack web and mobile developer 
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-teal-400">
                  <h3 className="text-xl font-semibold tracking-wide text-green-600">
                    Parts Technician
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    Aug 2021
                  </time>
                  <p className="mt-3">
                    Part Technician, servevice Technician and inventory supervisor
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-teal-400">
                  <h3 className="text-xl font-semibold tracking-wide text-green-600">
                    Petroleum Engineer
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    Jun 2015
                  </time>
                  <p className="mt-3">
                    Petroleum Engineer graduate, engineering principles and problem solving
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
