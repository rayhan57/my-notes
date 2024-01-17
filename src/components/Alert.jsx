import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Alert = ({ showAlert, setShowAlert, alertMessage }) => {
  const statusAlert =
    alertMessage === "Catatan berhasil ditambahkan"
      ? "bg-green-500"
      : "bg-red-500";

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }, [showAlert]);

  return (
    <>
      {showAlert && (
        <motion.div
          className={`flex items-center gap-2 ${statusAlert} mt-3 rounded-lg p-2 text-sm text-white lg:text-base`}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FaCheckCircle size={18} /> <p>{alertMessage}</p>
        </motion.div>
      )}
    </>
  );
};

export default Alert;
