import React from "react";

const Services = () => {
  const techServices = [
    {
      id: 1,
      image: require("../images/Alaf.jpeg"),
      title: "Web Development",
      decription: "We build website with modern technologies",
      more: "learn more",
    },
    {
      id: 1,
      image: require("../images/Alaf.jpeg"),
      title: "Web Development",
      decription: "We build website with modern technologies",
      more: "learn more",
    },
    {
      id: 1,
      image: require("../images/Alaf.jpeg"),
      title: "Web Development",
      decription: "We build website with modern technologies",
      more: "learn more",
    },
    {
      id: 1,
      image: require("../images/Alaf.jpeg"),
      title: "Web Development",
      decription: "We build website with modern technologies",
      more: "learn more",
    },
  ];
  return (
    <>
      <div class="text-white body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -m-4">
            {techServices.map((item) => (
            <div class="p-4 lg:w-1/2 md:w-full" key={item.id}>
              <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
                  <img src={item.image} />
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg title-font font-medium mb-3">
                    {item.title}
                  </h2>
                  <p class="leading-relaxed text-base">
                    {item.decription}
                  </p>
                  <a class="mt-3 text-green-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
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

export default Services;
