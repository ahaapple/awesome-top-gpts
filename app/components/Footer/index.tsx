"use client";

import {BsGithub, BsTwitter,BsFillEnvelopeFill } from "react-icons/bs";

export default () => {
  return (
<footer className="bg-gray-100">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center text-teal-600">
    <img
          alt="topGPTs"
          className="w-120 h-8 select-none" src="/gpt-logo.svg"
        />
    </div>

    <p className="mx-auto mt-12 max-w-md text-center text-gray-600">
          Find Awesome GPTs all over the world
    </p>

    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
      <li className="mx-4">
              <a
                href="https://twitter.com/ahaapple2023"
                target="_blank"
                className="hover:text-[#A7D397]"
              >
                <BsFillEnvelopeFill className="text-xl" />
              </a>
            </li>
      <li className="mx-4">
              <a
                href="https://twitter.com/ahaapple2023"
                target="_blank"
                className="hover:text-[#A7D397]"
              >
                <BsTwitter className="text-xl" />
              </a>
              </li>
            <li className="mx-4">
              <a
                href="https://github.com/ahaapple/GPTS-Crawler-Dataset"
                target="_blank"
                className="hover:text-[#A7D397]"
              >
                <BsGithub className="text-xl" />
              </a>
            </li>
    </ul>
  </div>
</footer>
  );
};
