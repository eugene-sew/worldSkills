import { useState } from "react";
import { Node } from "../components/Node";

export const Design = () => {
  const [node1, showNode1] = useState(false);
  const [node2, showNode2] = useState(false);
  const [node3, showNode3] = useState(false);
  const [node4, showNode4] = useState(false);
  const [node5, showNode5] = useState(false);

  return (
    <div className="relative w-[600px] h-[600px] ">
      {node1 && (
        <>
          <div className=" rotate-45 absolute top-0 right-[40%]">
            <Node />
          </div>
          <div className="h-20 w-2 bg-black absolute top-[22%] right-[50%] transition ease-in-out duration-300"></div>
        </>
      )}
      {node2 && (
        <>
          <div className="absolute right-0 top-[35%]  rotate-45">
            <Node />
          </div>
          <div className="h-20 w-2 bg-black absolute top-[39%] right-[28%] rotate-90 transition ease-in-out duration-300"></div>
        </>
      )}
      <div className="absolute top-[35%] right-[40%] rotate-45">
        <div className="w-32 h-32 rounded-full border-4 border-black rotate-45 col-span-3 place-self-center">
          <div
            className="peer w-full h-full rounded-full overflow-hidden -rotate-45 grid grid-cols-2 opacity-0 hover:opacity-100 bg-green-500 transition ease-in-out duration-300"
            id="main-node"
          >
            <div
              className="w-full h-full border-2 border-black hover:bg-black bg-opacity-0 hover:text-white font-bold text-lg grid place-content-center cursor-pointer"
              id="node-1"
              onClick={() => {
                showNode1(true);
              }}
            >
              1
            </div>
            <div
              className="w-full h-full border-2 border-black hover:bg-black bg-opacity-0 hover:text-white font-bold text-lg grid place-content-center cursor-pointer"
              id="node-2"
              onClick={() => {
                showNode2(true);
              }}
            >
              2
            </div>
            <div
              className="w-full h-full border-2 border-black hover:bg-black bg-opacity-0 hover:text-white font-bold text-lg grid place-content-center cursor-pointer"
              id="node-3"
              onClick={() => {
                showNode4(true);
              }}
            >
              3
            </div>
            <div
              className="w-full h-full border-2 border-black hover:bg-black bg-opacity-0 hover:text-white font-bold text-lg grid place-content-center cursor-pointer"
              id="node-4"
              onClick={() => {
                showNode5(true);
              }}
            >
              4
            </div>
          </div>

          <div className="flex gap-40 opacity-0 peer-hover:opacity-100 -rotate-45"></div>
        </div>
      </div>{" "}
      {node4 && (
        <>
          <div className="absolute  top-[35%]  rotate-45">
            <Node />
          </div>
          <div className="h-20 w-2 bg-black absolute top-[39%] left-[28%] rotate-90 transition ease-in-out duration-300"></div>
        </>
      )}
      {node5 && (
        <>
          <div className="absolute bottom-0 right-[40%]  rotate-45">
            <Node />
          </div>
          <div className="h-20 w-2 bg-black absolute bottom-[22%] left-[48%] transition ease-in-out duration-300"></div>
        </>
      )}
    </div>
  );
};
