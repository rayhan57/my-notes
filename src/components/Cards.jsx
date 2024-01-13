import React from "react";
import convertDate from "../utils/convertDate";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";

const Cards = ({ notes, handleDeleteNotes }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 border-b pb-4 mt-5">
      {notes.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col gap-8 border-t border-slate-50 shadow-lg rounded-lg relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="p-2.5">
            <h2 className="font-semibold text-lg">{item.title}</h2>
            <p className="text-sm">{item.description}</p>
          </div>
          <p className="bg-sky-500 rounded-b-lg text-white text-sm px-2 py-1">
            {convertDate(item.date)}
          </p>
          <button
            className="absolute -top-3 -right-3 bg-red-500 hover:scale-110 text-white rounded-full text-sm p-1 transition-all"
            onClick={() => handleDeleteNotes(item.id)}
          >
            <MdDelete size={20} />
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;
