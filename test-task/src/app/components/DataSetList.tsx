"use client";

import React from "react";
import { useRouter } from "next/navigation";

const DataSetList = () => {
  const router = useRouter();
  return (
    <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {/* <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span>Fashion</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{" "}
              <a
                href="/docs/getting-started/introduction/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                get started
              </a>{" "}
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </div>
        </div>
      </div> */}

      <div className="flex items-center p-4 w-full">
        <div className="bg-white w-full sm:w-1/2 lg:w-196 border border-gray-200 divide-y divide-gray-200">
          <details>
            <summary className="question py-3 px-4 cursor-pointer select-none w-full outline-none">
              Fashion
            </summary>
            <div className="ml-10">
              <button
                type="button"
                className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                onClick={() => router.push("/data-insights")}
              >
                <li> Tshirt </li>
              </button>
              <button
                type="button"
                className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                onClick={() => router.push("/data-insights")}
              >
                <li>Jeans </li>
              </button>
            </div>
          </details>
          <details>
            <summary className="question py-3 px-4 cursor-pointer select-none w-full">
              Electronics
            </summary>
            <div className="ml-10">
              <button
                type="button"
                className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                onClick={() => router.push("/data-insights")}
              >
                <li>Mobile</li>
              </button>
              <button
                type="button"
                className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                onClick={() => router.push("/data-insights")}
              >
                <li>Laptop</li>
              </button>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default DataSetList;
