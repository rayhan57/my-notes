import { format } from "date-fns";
import { id } from "date-fns/locale/id";

const getCurrentDate = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "dd MMMM yyyy", {
    locale: id,
  });
  return formattedDate;
};

export default getCurrentDate;
