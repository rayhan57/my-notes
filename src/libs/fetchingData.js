export const getNotes = async () => {
  const url = import.meta.env.VITE_BASE_URL;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const addNotes = async (data, onSuccess) => {
  const { date, id, title, description } = data;
  const url = `${
    import.meta.env.VITE_BASE_URL
  }?action=add&date=${date}&id=${id}&title=${title}&description=${description}`;
  const options = {
    method: "POST",
  };

  const response = await fetch(url, options);
  if (response.status === 200) {
    onSuccess();
  }
};

export const deleteNotes = async (id, onSuccess) => {
  const url = `${import.meta.env.VITE_BASE_URL}?action=delete&id=${id}`;
  const options = {
    method: "POST",
  };

  const response = await fetch(url, options);
  if (response.status === 200) {
    onSuccess();
  }
};
