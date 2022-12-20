import React from "react";

const Trusted = () => {
  return (
    <>
      <div className="p-6 py-12 dark:bg-gray-800 dark:text-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-3xl tracking-tighter font-bold animate-bounce text-white">
              Excellence in leadership
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0 text-white">
              <span>Trusted by</span>
              <span className="font-bold text-lg text-white">GreatSpiration</span>
            </div>
            {/* <a
              href="#"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
            >
              Shop Now
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trusted;
