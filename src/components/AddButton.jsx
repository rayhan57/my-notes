import React, { useEffect, useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";
import getCurrentDate from "../utils/getCurrentDate";
import { motion } from "framer-motion";

const AddButton = ({
  formData,
  setFormData,
  handleAddNotes,
  modalOpen,
  setModalOpen,
}) => {
  const modalRef = useRef();
  const currentDate = getCurrentDate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, date: currentDate, id: uuidv4(), [id]: value });
  };

  const closeModal = (e) => {
    const isOutsideModal =
      modalRef.current && !modalRef.current.contains(e.target);
    if (isOutsideModal) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeModal);

    return () => {
      document.removeEventListener("click", closeModal);
    };
  }, []);

  return (
    <div className="relative" ref={modalRef}>
      <button
        className="bg-sky-500 hover:bg-sky-600 text-white shadow-lg py-1.5 px-3 rounded-lg flex items-center gap-2 text-sm lg:text-base"
        onClick={() => setModalOpen(!modalOpen)}
      >
        <IoIosAddCircleOutline size={20} />
        Tambah Catatan
      </button>

      {modalOpen && (
        <div className="absolute z-10 top-10 -left-14 md:-left-10">
          <motion.div
            className="flex flex-col gap-6 border-t border-slate-50 shadow-xl rounded-lg overflow-hidden bg-white"
            initial={{ y: -40 }}
            animate={{ y: 0 }}
          >
            <div className="p-2.5">
              <input
                type="text"
                id="title"
                placeholder="Title"
                value={formData.title}
                className="block h-8 border-0 placeholder:font-semibold font-semibold text-lg capitalize focus:ring-0 p-1"
                onChange={handleInputChange}
              />
              <textarea
                type="text"
                id="description"
                placeholder="Description"
                value={formData.description}
                className="block w-full border-0 resize-none focus:ring-0 p-1"
                onChange={handleInputChange}
              />
            </div>
            <p className="bg-sky-500 text-white text-sm px-2 py-1">
              {currentDate}
            </p>
          </motion.div>

          <motion.button
            className="mx-auto bg-sky-500 hover:bg-sky-600 text-white shadow-lg py-1.5 px-3 rounded-lg flex items-center gap-2 text-sm mt-2"
            onClick={handleAddNotes}
            initial={{ y: -40 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <IoCheckmark size={18} /> Tambah
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default AddButton;
