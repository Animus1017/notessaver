import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPaste, updatePaste } from "../redux/slices/pasteSlice";
import { LuCopy } from "react-icons/lu";
import toast from "react-hot-toast";
import { LuCirclePlus } from "react-icons/lu";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const pasteId = searchParams.get("pasteId");
  const allPaste = useSelector((state) => state.paste.pastes);
  const navigate = useNavigate();
  function createPaste() {
    if (title === "") {
      toast.error("Title is required");
      return;
    }
    const paste = {
      title: title,
      content: value,
      createdAt: new Date().toISOString(),
      id: pasteId || Date.now().toString(36),
    };
    if (pasteId) {
      dispatch(updatePaste(paste));
    } else {
      dispatch(addPaste(paste));
    }
    setTitle("");
    setValue("");
    setSearchParams({});
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    toast.success("Copied successfully");
  };

  useEffect(() => {
    if (pasteId && allPaste.length) {
      const paste = allPaste.find((p) => p.id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    } else {
      setTitle("");
      setValue("");
      setSearchParams({});
    }
  }, [pasteId]);
  return (
    <div className="flex flex-col gap-5 py-10 max-w-5xl mx-auto">
      <div className="flex gap-5 items-center">
        <input
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-slate-900 border p-2 rounded-md grow border-gray-400 outline-none text-white"
        />
        <div className="flex items-center gap-5">
          <button
            onClick={createPaste}
            className="bg-blue-500 text-white text-bold px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            {pasteId ? "Update My Paste" : "Create My Paste"}
          </button>
          {pasteId && (
            <button
              onClick={() => setSearchParams(() => navigate("/"))}
              className="bg-blue-500 text-2xl text-white text-bold px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 h-full"
            >
              <LuCirclePlus />
            </button>
          )}
        </div>
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
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={20}
          className="bg-slate-900 outline-none p-3 w-full h-full text-white"
        />
      </div>
    </div>
  );
};

export default Home;
