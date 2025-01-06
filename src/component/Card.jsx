import React from "react";
import { useDispatch } from "react-redux";
import { deletePaste } from "../redux/slices/pasteSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LuPencilLine, LuCopy } from "react-icons/lu";
import { AiOutlineEye } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";

const Card = ({ paste }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    dispatch(deletePaste(paste?.id));
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(paste?.content);
    toast.success("Copied successfully");
  };
  return (
    <div className=" border border-gray-400 rounded-md flex justify-between text-white p-3 items-center">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold ">{paste.title}</h3>
        <p className="text-sm">{paste.content}</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-2 text-xl justify-between">
          <button
            onClick={() => navigate(`/?pasteId=${paste.id}`)}
            className="border p-2 border-gray-400 rounded-md  hover:text-blue-500 duration-300 transition-all hover:border-blue-400"
          >
            <LuPencilLine />
          </button>
          <button
            onClick={() => navigate(`/pastes/${paste?.id}`)}
            className="border p-2 border-gray-400 rounded-md  hover:text-yellow-500 duration-300 transition-all hover:border-yellow-400"
          >
            <AiOutlineEye />
          </button>
          <button
            onClick={handleDelete}
            className="border p-2 border-gray-400 rounded-md  hover:text-red-500 duration-300 transition-all hover:border-red-400"
          >
            <RiDeleteBin6Line />
          </button>
          <button
            onClick={handleCopy}
            className="border p-2 border-gray-400 rounded-md  hover:text-green-500 duration-300 transition-all hover:border-green-400"
          >
            <LuCopy />
          </button>
        </div>
        <p className="flex items-center gap-2 font-semibold">
          <MdOutlineDateRange className="text-xl" />
          {new Date(paste.createdAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default Card;
