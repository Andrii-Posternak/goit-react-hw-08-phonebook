import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// ============= contacts fetch =============

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

// ============= auth fetch =============

export const registerUserApi = async newUser => {
  try {
    const response = await axios.post('/users/signup', newUser);
    return response.data;
  } catch (error) {
    return alert(error.message);
  }
};

export const loginUserApi = async userData => {
  try {
    const response = await axios.post('/users/login', userData);
    return response.data;
  } catch (error) {
    return alert(error.message);
  }
};

export const logoutUserApi = async () => {
  try {
    await axios.post('/users/logout');
  } catch (error) {
    return alert(error.message);
  }
};

export const getCurrentUserApi = () => {
  return axios.get('/users/current').then(response => {
    return response.data;
  });
};
