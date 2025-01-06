import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../component/Card";

const Pastes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const pastes = useSelector((state) => state.paste.pastes);
  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="flex flex-col gap-5 py-10 max-w-5xl mx-auto">
      <input
        type="text"
        placeholder="Search paste here...."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-slate-900 border p-2 rounded-md grow border-gray-400 outline-none text-white"
      />
      <div className=" border border-gray-400 rounded-md ">
        <div className="border-b border-gray-400 px-4 py-2">
          <h2 className="text-3xl text-white font-black">All Pastes</h2>
        </div>
        <div className="p-3 flex flex-col gap-3">
          {filteredPastes.length > 0 ? (
            filteredPastes.map((paste) => <Card key={paste.id} paste={paste} />)
          ) : (
            <p className="text-blue-500 text-lg font-bold">No pastes found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pastes;
// filteredPastes.map((paste) => (
//   <div key={paste.id}>
//     <h2>{paste.title}</h2>
//     <p>{paste.content}</p>
//   </div>
// ))
