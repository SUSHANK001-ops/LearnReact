import { Trash2 } from "lucide-react";
import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle("");
    setDetails("");
  };
  const deletehandler = (idx)=>{
      const copyTask = [...task];
     copyTask.splice(idx,1)
     setTask(copyTask);

}
  return (
    <div className=" lg:h-screen bg-black lg:flex  text-white  ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2  items-start flex-col gap-5  p-10   "
      >
        <h1 className="text-3xl font-bold text-center">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="p-5 w-full border-2 font-medium outline-none rounded "
        />
        <textarea
          type="text"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          placeholder="Enter Details"
          className="p-5 w-full border-2  font-medium h-32 outline-none rounded "
        />
        <button
          className="
        active:bg-gray-200
        bg-white w-full  font-medium outline-none  text-black px-5 py-2  "
        >
          Add Notes
        </button>
      </form>
      <div className="  lg:w-1/2 lg:border-l-2  p-10">
        <h1 className="text-3xl font-bold text-center">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-[80vh] overflow-auto justify-center">
          {task.map((e, idx) => {
            return (
              <div
                key={idx}
                className=" flex justify-between flex-col items-start h-60 w-52 overflow-auto rounded-2xl text-black py-2 px-5 object-cover bg-[url('data:image/jpeg;base64,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')]"
              >
                <h3 className="leading-tight mt-4 text-xl font-bold">
                  {e.title}
                </h3>
                <p className="mt-1 leading-tight font-medium text-gray-700">
                  {e.details}
                </p>
                <button onClick={()=>{
                  deletehandler(idx)
                }} className="w-full rounded-full p-2 cursor-pointer bg-red-500 hover:scale-95 text-white ">
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
