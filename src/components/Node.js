import React, { useState } from "react";

export const Node = () => {
  const [showEditor, setShowEditor] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShowEditor(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          className="w-10 h-10 hover:text-green-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          className="w-10 h-10 hover:text-rose-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
      <div className="w-32 h-32 rounded-full border-4 border-black rotate-45 col-span-3 place-self-center">
        <div
          className="peer w-full h-full rounded-full overflow-hidden -rotate-45 grid grid-cols-2 opacity-0 hover:opacity-100 bg-green-500 transition ease-in-out duration-300"
          id="main-node"
        >
          <div
            className="w-full h-full border-2 border-black hover:bg-black bg-opacity-0 hover:text-white font-bold text-lg grid place-content-center cursor-pointer"
            id="node-1"
            onclick="genNode()"
          >
            1
          </div>
          <div
            className="w-full h-full border-2 border-black hover:bg-black bg-opacity-0 hover:text-white font-bold text-lg grid place-content-center cursor-pointer"
            id="node-2"
            onclick="genNode()"
          >
            2
          </div>
          <div
            className="w-full h-full border-2 border-black hover:bg-black bg-opacity-0 hover:text-white font-bold text-lg grid place-content-center cursor-pointer"
            id="node-3"
            onclick="genNode()"
          >
            3
          </div>
          <div
            className="w-full h-full border-2 border-black hover:bg-black bg-opacity-0 hover:text-white font-bold text-lg grid place-content-center cursor-pointer"
            id="node-4"
            onclick="genNode()"
          >
            4
          </div>
        </div>

        <div className="flex gap-40 opacity-0 peer-hover:opacity-100 -rotate-45"></div>
      </div>
    </>
  );
};
