import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { LuCopy } from "react-icons/lu";
import toast from "react-hot-toast";
const ViewPaste = () => {
  const { id } = useParams();
  const allPaste = useSelector((state) => state.paste.pastes);
  const paste = allPaste.find((paste) => paste.id === id);
  const handleCopy = () => {
    navigator.clipboard.writeText(paste.content);
    toast.success("Copied successfully");
  };
  return (
    <div className="flex flex-col gap-5 py-10 max-w-5xl mx-auto">
      <div className="flex gap-5 items-center">
        <input
          type="text"
          placeholder="Enter title here"
          value={paste.title}
          className="bg-slate-900 border p-2 rounded-md grow border-gray-400 outline-none text-white"
          disabled
        />
      </div>
      <div className=" border border-gray-400 rounded-md">
        <div className="flex justify-between border-b border-gray-400 px-4 py-2">
          <div className="flex items-center gap-1">
            <div className="rounded-full w-3 h-3 bg-red-500"></div>
            <div className="rounded-full w-3 h-3 bg-yellow-500"></div>
            <div className="rounded-full w-3 h-3 bg-green-500"></div>
          </div>
          <button
            className="text-xl text-white hover:text-green-500 duration-300 transition-all"
            onClick={handleCopy}
          >
            <LuCopy />
          </button>
        </div>
        <textarea
          placeholder="Write your content here...."
          value={paste.content}
          rows={20}
          className="bg-slate-900 outline-none p-3 w-full h-full text-white"
          disabled
        />
      </div>
    </div>
  );
};

export default ViewPaste;
