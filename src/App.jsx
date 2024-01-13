import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import AddButton from "./components/AddButton";
import { addNotes, deleteNotes, getNotes } from "./libs/fetchingData";
import Alert from "./components/Alert";
import Backdrop from "./components/Backdrop";
import { motion } from "framer-motion";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [formData, setFormData] = useState({
    date: "",
    id: "",
    title: "",
    description: "",
  });
  const [notes, setNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    const response = await getNotes();
    const sortedData = response.data.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    setNotes(sortedData);
  };

  const handleAddNotes = async () => {
    if (formData.title) {
      setModalOpen(false);
      await addNotes(formData, () => {
        setShowAlert(true);
        setAlertMessage("Catatan berhasil ditambahkan");
        resetForm();
      });
    }
  };

  const handleDeleteNotes = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus catatan ini?");
    if (confirmDelete) {
      await deleteNotes(id, () => {
        setShowAlert(true);
        setAlertMessage("Catatan berhasil dihapus");
      });
    }
  };

  const resetForm = () => {
    setFormData({
      date: "",
      id: "",
      title: "",
      description: "",
    });
  };

  useEffect(() => {
    fetchData();
  }, [notes]);

  const itemsPerPage = 20;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNotes = notes.slice(startIndex, endIndex);

  return (
    <div className="container">
      <div className="flex justify-between items-center border-b p-4">
        <a href="/">
          <img src="/logo.svg" className="w-24" />
        </a>
        <AddButton
          formData={formData}
          setFormData={setFormData}
          handleAddNotes={handleAddNotes}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </div>

      <Alert
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        alertMessage={alertMessage}
      />

      {notes?.length > 0 ? (
        <Cards notes={currentNotes} handleDeleteNotes={handleDeleteNotes} />
      ) : (
        <p className="text-center font-semibold mt-3">Tidak ada catatan</p>
      )}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentItemsPerPage={currentNotes.length}
        itemsPerPage={itemsPerPage}
        totalData={notes.length}
      />

      <Footer />

      {modalOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Backdrop />
        </motion.div>
      )}
    </div>
  );
};

export default App;
