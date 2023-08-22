import React from "react";
import Image from "next/image";
const houses = require("../../../data");
export const HomeListing = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
          {houses.map((house) => (
            <a
              key={house.id}
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent m-5 px-10 py-10 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                <img src={house.image} loading="lazy" alt="house" />
                {house.houseDetails}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-m opacity-50`}>
                {house.location}
              </p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
};
