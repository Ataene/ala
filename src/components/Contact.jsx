import React, { useContext, useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { FirebaseContext } from "../auth/FirebaseProvider";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const fbContext = useContext(FirebaseContext);
  const db = fbContext.db;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
       await addDoc(collection(db, "contact"), {
        fullName,
        email,
        message,
        timeStamp: serverTimestamp(),
      });
      setFullName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log("Error submitted form");
    }
  };
  return (
    <>
      <div className="text-gray-900 py-5  md:mt-2 md:mb-2 ">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div
            className="py-6 md:py-0 md:px-6 bg-sky-200 shadow-lg shadow-sky-500/60"
            data-aos="fade-right"
          >
            <h1 className="text-4xl font-bold md:pt-10 md:mt-10">
              Contact us today
            </h1>
            <p className="pt-2 pb-4 text-2xl">Call or send us a message</p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <span className="text-2xl md:ml-2">Calgary, Alberta, Canada</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <span className="text-2xl md:ml-2">+1 (403)-299-344</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <span className="text-2xl md:ml-2">cornish@teams.com</span>
              </p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            data-aos="fade-left"
            noValidate=""
            action="https://formsubmit.co/ke.alafonye@yahoo.com"
            className="flex ng-valid flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </label>
            <button
              type="submit"
              className="self-center focus:ring-opacity-75 px-8 py-3 text-lg rounded focus:ring hover:ring bg-green-400 shadow-lg shadow-green-500/60 dark:text-gray-900 focus:ring-green-400 hover:ring-green-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;