import { useState } from "react";
import { Editor } from "./components/Editor";
import { Design } from "./views/Design";

function App() {
  const [showEditor, setShowEditor] = useState(false);
  return (
    <div className="flex justify-center items-center flex-col">
      <header className="w-full flex justify-end mr-10 gap-10">
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
        <button className="p-5 shadow-lg rounded ">Presentation Mode</button>
      </header>

      <Design />
      {showEditor && (
        <div className="absolute top-0 w-screen h-screen bg-white bg-opacity-70">
          <Editor />
        </div>
      )}
    </div>
  );
}

export default App;
