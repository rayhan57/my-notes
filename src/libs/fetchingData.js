export const getNotes = async () => {
  const url =
    "https://script.google.com/macros/s/AKfycbz8UdIZts7pZNol-YORGCdaokYemkTTwMA4bmFmBs6HRFQDC6uRCg609_yWeiMdBPE/exec";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const addNotes = async (data, onSuccess) => {
  const { date, id, title, description } = data;
  const url = `https://script.google.com/macros/s/AKfycbz8UdIZts7pZNol-YORGCdaokYemkTTwMA4bmFmBs6HRFQDC6uRCg609_yWeiMdBPE/exec?action=add&date=${date}&id=${id}&title=${title}&description=${description}`;
  const options = {
    method: "POST",
  };

  const response = await fetch(url, options);
  if (response.status === 200) {
    onSuccess();
  }
};

export const deleteNotes = async (id, onSuccess) => {
  const url = `https://script.google.com/macros/s/AKfycbz8UdIZts7pZNol-YORGCdaokYemkTTwMA4bmFmBs6HRFQDC6uRCg609_yWeiMdBPE/exec?action=delete&id=${id}`;
  const options = {
    method: "POST",
  };

  const response = await fetch(url, options);
  if (response.status === 200) {
    onSuccess();
  }
};
