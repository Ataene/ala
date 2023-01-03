import React from "react";
import { Link } from "react-router-dom";

const projectList = [
  {
    id: 1,
    img: require("../images/Hundie.PNG"),
    title: "Social product exchange",
    description: "Exchange unused products within community",
    url: "https://hundietrade.web.app/",
    github: "https://github.com/Ataene/Nenes-GroupProject/tree/master/frontend",
  },
  {
    id: 2,
    img: require("../images/Citizen.PNG"),
    title: "Citizen to City",
    description: "Citizen report incident city staff",
    url: "https://github.com/Zia20/GroupProject",
    github: "https://github.com/Zia20/GroupProject",
  },
  {
    id: 3,
    img: require("../images/printing.jpg"),
    title: "Printing Press",
    description: "Design all kinds of digital products",
    url: "https://atmatdesigns.netlify.app/",
    github: "https://github.com/Ataene/Atmat",
  },
  {
    id: 4,
    img: require("../images/eCommerce.jpg"),
    title: "Ecommerce for good",
    description: "Build a ecommerce products used",
    url: "https://greatspirationse.netlify.app/",
    github: "https://github.com/Ataene/eCommerce-site",
  },
  {
    id: 5,
    img: require("../images/Weather.jpg"),
    title: "Javascript toggle",
    description: "Toggle between products and play games",
    url: "https://github.com/Ataene/AnimationToggle",
    github: "https://github.com/Ataene/AnimationToggle",
  },
  {
    id: 6,
    img: require("../images/Tesla.jpg"),
    title: "Crime Game",
    description: "Play a crime suspect scene game.",
    url: "https://github.com/Ataene/Detective-game",
    github: "https://github.com/Ataene/Detective-game",
  },
  {
    id: 7,
    img: require("../images/Tesla.jpg"),
    title: "Crime Game",
    description: "Play a crime suspect scene game.",
    url: "https://github.com/Ataene/Detective-game",
    github: "https://github.com/Ataene/Detective-game",
  },
  {
    id: 8,
    img: require("../images/Tesla.jpg"),
    title: "Crime Game",
    description: "Play a crime suspect scene game.",
    url: "https://github.com/Ataene/Detective-game",
    github: "https://github.com/Ataene/Detective-game",
  },
];

const Project = () => {
  return (
    <>
      <div class="text-gray-600 body-font">
        <div
          class="container px-5 py-5 mx-auto"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-once="true"
        >
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Personal and Collaborative Projects
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            {projectList.map((items) => (
              <div class="xl:w-1/4 md:w-75 p-4 hover:scale-105" key={items.id}>
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6 hover:scale-105"
                    src={items.img}
                    alt="content"
                  />
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    {items.title}
                  </h2>
                  <p class="leading-relaxed text-base">{items.description}</p>
                  <div class="flex justify-center">
                    <div class="inline-flex border-0 py-3 px-1">
                      <Link
                        rel="noopener noreferrer"
                        onClick={() =>
                          window.open(
                            "https://www.linkedin.com/in/alafonye-emmanuel/",
                            "_blank"
                          )
                        }
                        title="LinkedIn Profile"
                        className="flex items-center justify-center w-10 h-10 rounded dark:bg-sky-400 text-white cursor-pointer hover:scale-105 hover:bg-sky-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-10 h-10"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-3 px-1">
                      <Link
                        rel="noopener noreferrer"
                        onClick={() =>
                          window.open("https://github.com/Ataene", "_blank")
                        }
                        title="GitHub Profile"
                        className="flex items-center justify-center w-10 h-10 rounded dark:bg-sky-400 text-white cursor-pointer hover:scale-105 hover:bg-sky-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-10 h-10"
                        >
                          <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                        </svg>
                      </Link>
                    </div>
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

export default Project;
