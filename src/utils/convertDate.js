import { format } from "date-fns";
import { id } from "date-fns/locale/id";

const convertDate = (date) => {
  const formatedDate = format(new Date(date), "dd MMMM yyyy", { locale: id });
  return formatedDate;
};

export default convertDate;
