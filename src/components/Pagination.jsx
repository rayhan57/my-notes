import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const Pagination = ({
  currentPage,
  setCurrentPage,
  currentItemsPerPage,
  itemsPerPage,
  totalData,
}) => {
  const totalPages = Math.ceil(totalData / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    scrollToTop();
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    scrollToTop();
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="text-center mt-5">
      <p className="mb-2 text-sm lg:text-base">
        Showing <span className="font-semibold">{currentPage}</span> of{" "}
        <span className="font-semibold">{currentItemsPerPage}</span> of{" "}
        <span className="font-semibold">{totalPages}</span> entries
      </p>

      <div className="flex justify-center divide-x text-sm lg:text-base">
        <button
          className="flex items-center bg-sky-500 hover:bg-sky-600 disabled:brightness-90 disabled:cursor-not-allowed disabled:hover:bg-sky-500 rounded-s-lg text-white px-3 py-1.5"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          <GrFormPrevious /> Prev
        </button>
        <button
          className="flex items-center bg-sky-500 hover:bg-sky-600 disabled:brightness-90 disabled:cursor-not-allowed disabled:hover:bg-sky-500 rounded-e-lg text-white px-3 py-1.5"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
