import axios from 'axios';

axios.defaults.baseURL = 'https://63e2579e109336b6cb057ad2.mockapi.io/api/v1';

export const fetchContactsApi = async () => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return alert(error.message);
  }
};

export const addContactApi = async newContact => {
  try {
    const response = await axios.post('/contacts', newContact);
    return response.data;
  } catch (error) {
    return alert(error.message);
  }
};

export const deleteContactApi = async id => {
  try {
    const response = await axios.delete(`/contacts/${id}`);

    return response.data;
  } catch (error) {
    return alert(error.message);
  }
};
